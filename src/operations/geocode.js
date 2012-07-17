/**
# dws.geocode(address, opts, callback)

## Configurable Options

- provideRouteHandle:   Whether or not a route handle should be returned (default = false)
- distanceUnit:         Distance units (default = KM)
- routeQueryType:       The type of decarta routing request to make, RMAN, RTXT, etc (default = RMAN)

- routePreference:      What type of routing algorithm to use, fastest, shortest, etc (default = fastest)

*/
dws.geocode = function(address, opts, callback) {
    var waypoints = '';

    // remap args if required
    if (typeof opts == 'function') {
        callback = opts;
        opts = {};
    }
    
    // create the address xml
    opts.address = dws.addressToXML(address, opts);

    // run the request
    dws('GeocodeRequest', opts, function(err, response) {
        // if we haven't received an error, make the response more consistent
        if (! err) {
            var results = (response.GeocodeResponseList || {}).GeocodedAddress || [],
                matchType,
                noResults = true;

            // if the response list is not an array, turn it into one
            if (! Array.isArray(results)) {
                results = [results];
            }
            
            // iterate through the results and normalize the decarta address into a standard format
            results.forEach(function(result) {
                result.address = parseAddress(result.Address);
                result.pos = result.Point.pos;
                
                // get the match type
                matchType = (result.GeocodeMatchCode || {}).matchType;
                
                // determine whether we have no results
                noResults = noResults && matchType === 'NO_MATCH';
            });
            
            // if we have a match type of 'NO_MATCH', then return an error
            if (noResults) {
                var missingAddresses = results.map(function(result) {
                    return result.address.toString();
                });
                
                err = new Error('No match found for input addresses (' + missingAddresses.join('; ') + ')');
            }

            callback(err, results);
        }
        else {
            callback(err);
        }
    });
};

function parseAddress(address, position) {
    var streetDetails = parseStreet(address.StreetAddress),
        regions = [];

    // iterate through the places
    if (address.Place) {
        if (! address.Place.length) {
            address.Place = [address.Place];
        } // if

        for (var ii = address.Place.length; ii--; ) {
            regions[regions.length] = address.Place[ii].content;
        } // for
    } // if

    return {
        building: streetDetails.building,
        street: streetDetails.street,
        regions: regions,
        countryCode: address.countryCode || '',
        postalCode: address.PostalCode || '',
        
        toString: function() {
            return [streetDetails.toString()].concat(regions).join(', ');
        }
    };
} // parseAddress

function parseStreet(streetAddress) {
    // initialise variables
    var street = "",
        building = "";
        
    // ensure street address contains a value we can work with
    streetAddress = streetAddress || {};
        
    // parse the street
    if (streetAddress.Street) {
        street = streetAddress.Street.content ? streetAddress.Street.content : streetAddress.Street;
    } // if

    // strip any trailing highway specifiers from the street
    street = (street && street.replace) ? street.replace(/\/\d+$/, "") : "";
    
    // parse the building
    if (streetAddress.Building) {
        // TODO: suspect name will be involved here possibly also
        if (streetAddress.Building.number) {
            building = streetAddress.Building.number;
        } // if
    } // if
    
    return {
        building: building,
        street: street,
        
        /*
        calcMatchPercentage: function(input) {
            var fnresult = 0,
                test1 = normalize(input), 
                test2 = normalize(street);
                
            if (params.json.Building) {
                if (buildingMatch(input, params.json.Building.number.toString())) {
                    fnresult += 0.2;
                } // if
            } // if
                
            if (test1 && test2 && T5.wordExists(test1, test2)) {
                fnresult += 0.8;
            } // if

            return fnresult;
        },
        */
        
        toString: function() {
            return (building ? building + ' ' : '') + street;
        }
    };
}