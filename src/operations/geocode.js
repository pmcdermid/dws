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
    
    // ensure we have options
    opts = opts || {};
    
    // default the country and language
    opts.country = opts.country || 'US';
    opts.lang = opts.lang || 'EN';
    
    // create the address xml
    opts.address = dws.addressToXML(address);
    console.log(opts);

    // run the request
    dws('DetermineRouteRequest', opts, callback);
};