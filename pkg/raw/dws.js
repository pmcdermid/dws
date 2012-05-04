// req: jsonget, handlebars, async, underscore

var _templates = {
  'Address': '<xls:Address countryCode="{{ country }}" language="{{ lang }}">{{#if street}}<xls:StreetAddress>{{#if number}}<xls:Building number="{{ number }}"/>{{/if}}<xls:Street>{{ street }}</xls:Street></xls:StreetAddress>{{#each regions}}<xls:Place type="{{ type }}">{{ text }}</xls:Place>{{/each}}{{else}}<xls:freeFormAddress>{{ text }}</xls:freeFormAddress>{{/if}}</xls:Address>',
  'DetermineRouteRequest': '<xls:DetermineRouteRequest provideRouteHandle="{{ provideRouteHandle }}" distanceUnit="{{ distanceUnit }}" routeQueryType="{{ routeQueryType }}"><xls:RoutePlan><xls:RoutePreference>{{ routePreference }}</xls:RoutePreference><xls:WayPointList>{{{ waypoints }}}</xls:WayPointList></xls:RoutePlan>{{#if instructions}}<xls:RouteInstructionsRequest rules="{{ rulesFile }}" providePoint="true" />{{/if}}{{#if geometry}}<xls:RouteGeometryRequest />{{/if}}</xls:DetermineRouteRequest>',
  'GeocodeRequest': '<xls:GeocodeRequest>{{#each address}}{{{ this }}}{{/each}}</xls:GeocodeRequest>',
  'Request': '<xls:XLS version="1" xls:lang="en" xmlns:xls="http://www.opengis.net/xls" rel="{{ ddsVersion }}" xmlns:gml="http://www.opengis.net/gml"><xls:RequestHeader clientName="{{ user }}" clientPassword="{{ apikey }}" sessionID="{{ sessionId }}" configuration="{{ mapConfig }}" /><xls:Request maximumResponses="{{ maxResponses }}" version="{{ version }}" requestID="{{ requestId }}" methodName="{{ requestName }}">{{{ requestBody }}}</xls:Request></xls:XLS>',
  'RUOKRequest': '<xls:RUOKRequest />'
};


// get the handlebars library
var hbs = typeof Handlebars != 'undefined' ? Handlebars : handlebars,
    _ = typeof window != 'undefined' ? window._ : underscore,
    sessionId = new Date().getTime(),
    ddsCurrentVersion = '4.5.2',
    nextRequestId = 1,
    handshakeResponse,
    reTrailingSlash = /\/$/,
    reCoreRequestName = /^(.*)Request$/i,
    
    // initialise default option values
    defaultOpts = {
        // initialise the default map configuration
        mapConfig: 'global-decarta',
        
        // set the max responses to the devzone default of 25
        maxResponses: 25,
        version: '1.0',
        
        // create a new default session id
        sessionId: new Date().getTime(),
        
        // initialise the default dds version
        ddsVersion: '4.5.2',
        
        // initialise the default endpoint
        endpoint: 'http://ws.decarta.com/openls',
        
        // routing defaults
        rulesFile: 'maneuver-rules'
    };
    
// compile the resources
for (var key in _templates) {
    _templates[key] = hbs.compile(_templates[key]);
}

function addressToXML(address, opts) {
    var data,
        results = [],
        parser = _templates.Address,
        regionTypes = ['Municipality'];
        
    function qualifyRegion(region, idx) {
        data.regions[idx] = {
            text: region,
            type: regionTypes[idx] || 'CountrySubdivision'
        };
    }
        
    // ensure we have opts
    opts = opts || {};
    
    // default the opts
    opts.country = opts.country || 'US';
    opts.lang = opts.lang || 'EN';
    
    // if the address is not an array, then make it one
    if (! Array.isArray(address)) {
        address = [address];
    }
    
    for (var ii = 0, count = address.length; ii < count; ii++) {
        // if the specified address is a string, then convert into a tmp object
        if (typeof address[ii] == 'string' || (address[ii] instanceof String)) {
            data = _.extend({}, opts, {
                text: address[ii]
            });
        }
        else {
            data = _.extend({}, opts, address[ii]);
            
            // qualify regions
            (data.regions || []).forEach(qualifyRegion);
        }
        
        results[ii] = parser(data);
    }

    return results;
}

function configure(opts) {
    _.extend(defaultOpts, opts);
}

function extractCoreResponse(requestType, response) {
    var responseType = requestType.replace(reCoreRequestName, '$1Response'),
        nodes = ['response', 'XLS', 'Response', responseType],
        errNodes = ['response', 'XLS', 'ResponseHeader', 'ErrorList'],
        realResponse = response, errResponse = response;
        
    // console.log(nodes);
    // console.log(require('util').inspect(realResponse, false, Infinity, true));

    while (realResponse && nodes.length) {
        realResponse = realResponse[nodes.shift()];
    }
    
    // if we don't have a real response, look for an error
    if (! realResponse) {
        while (errResponse && errNodes.length) {
            errResponse = errResponse[errNodes.shift()];
        }
    }
    
    // console.log(require('util').inspect(response, false, Infinity, true));
    return realResponse || new Error(errResponse.Error.message);
}

function makeRequest(requestType, opts, callback) {
    var args, data, xml, targetUrl, jsonOpts;
    
    // if we don't have a template for the specified request type, then throw an error
    if (typeof _templates[requestType] != 'function') {
        throw new Error('Cannot find a template for a "' + requestType + '" request.');
    }
    
    // clone the options into request data
    data = _.clone(opts);
    
    // initialise the request id
    data.requestId = data.requestId || nextRequestId++;
    
    // generate the inner content
    data.requestName = requestType;
    data.requestBody = _templates[requestType](data);

    // create the xml request content
    xml = _templates.Request(data);
    
    // create the request args
    args = {
        reqID: data.requestId,
        chunkNo: 1, 
        numChunks: 1,
        data: xml,
        responseFormat: 'JSON'
    };
    
    // specify jsonget opts
    // the decarta API insists (incorrectly) on a callback so we have to give it one
    jsonOpts = {
        forceCallback: true
    };
    
    // make the request
    jsonget(
        opts.endpoint.replace(reTrailingSlash, '') + '/JSON', 
        args, 
        jsonOpts, 
        function(err, results) {
            var coreResponse;
            
            // extract the core response
            if (! err) {
                coreResponse = extractCoreResponse(requestType, results);

                // if we only extracted an error, then map the core response 
                // to the error param and the core response back to the complete
                // results
                if (coreResponse instanceof Error) {
                    err = coreResponse;
                    coreResponse = results;
                }
            }
            
            callback(err, coreResponse);
        }
    );
}

function handshake(opts, callback) {
    // if we have an existing handshake response, then trigger the callback
    if (handshakeResponse) return callback(null, handshakeResponse);

    // make the ruokrequest
    makeRequest('RUOKRequest', opts, function(err, response) {
        // cache the handshake response
        if (! err) {
            handshakeResponse = response;
        }
        
        callback(err, response);
    });
}

function template(name) {
    return _templates[name];
}

/**
# dws
This is a JS frontend for the decarta routing engine via their WebServices
frontend.

## Configurable Options

- mapConfig:            The server map configuration to use (default = global-decarta)
- user:                 The username to use for authenticating with the decarta services
- apikey:               The api key for authenticating with the decarta services

- maxResponses:         (default = 25)
- version:              (default = 1.0)
- requestId:            The request id (automatically incrementing)
- sessionId:            The session id (default = generated)

- ddsVersion:           Set to the version of the DDS you are using (default = 4.5.2)
- endpoint:             The DDS Webservices endpoint (default: http://ws.decarta.com/openls)
*/
function dws(requestType, opts, callback) {
    // remap args if required
    if (typeof opts == 'function') {
        callback = opts;
        opts = {};
    }
    
    // initialise a default callback if none provided
    // TODO: consider returning a promise instead
    callback = callback || function() {};
    
    // ensure we have been passed options
    // and fill in defaults where required
    opts = _.defaults(opts || {}, defaultOpts);
    
    // check handshake done
    handshake(opts, function(err, data) {
        // if we received an error, then fire the callback and return
        if (err) {
            callback(err);
            return;
        }
        
        // TODO: apply the handshake option tweaks
        makeRequest(requestType, opts, callback);
    });
}

// expose the create request and handshake functions
dws.addressToXML = addressToXML;
dws.configure = configure;
dws.makeRequest = makeRequest;
dws.handshake = handshake;
dws.template = template;

// include the other operations
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
    opts.address = dws.addressToXML(address, opts);

    // run the request
    dws('GeocodeRequest', opts, callback);
};
/**
# dws.route(points, opts, callback)

## Configurable Options

- provideRouteHandle:   Whether or not a route handle should be returned (default = false)
- distanceUnit:         Distance units (default = KM)
- routeQueryType:       The type of decarta routing request to make, RMAN, RTXT, etc (default = RMAN)

- routePreference:      What type of routing algorithm to use, fastest, shortest, etc (default = fastest)

*/
dws.route = function(points, opts, callback) {
    var waypoints = '';

    // remap args if required
    if (typeof opts == 'function') {
        callback = opts;
        opts = {};
    }
    
    // ensure we have options
    opts = opts || {};

    // initialise DetermineRouteRequest tag attributes
    opts.provideRouteHandle = (typeof opts.provideRouteHandle != 'undefined' && opts.provideRouteHandle).toString();
    opts.distanceUnit = opts.distanceUnit || 'KM';
    opts.routeQueryType = opts.routeQueryType || 'RMAN';

    // initialise the route preference option
    opts.routePreference = opts.routePreference || 'fastest';
    
    // initialise instructions and route geometry to return true
    opts.geometry = typeof opts.geometry == 'undefined' || opts.geometry;
    
    // initialise instruction defaults
    opts.instructions = typeof opts.instructions == 'undefined' || opts.instructions;
    
    // create the waypoint tags manually
    // only need to do this because of the StartPoint, EndPoint, ViaPoint tag names :/
    for (var ii = 0, count = points.length; ii < count; ii++) {
        // determine the appropriate tag to use for the waypoint
        // as to why this is required, who knows....
        var tagName = (ii === 0 ? "StartPoint" : (ii === count-1 ? "EndPoint" : "ViaPoint"));
        
        waypoints += '<xls:' + tagName + '><xls:Position><gml:Point><gml:pos>' + 
            points[ii].lat + ' ' + points[ii].lon + 
            '</gml:pos></gml:Point></xls:Position></xls:' + tagName + '>';
    }
    
    // add the the waypoints to the options
    opts.waypoints = waypoints;
    
    // run the request
    dws('DetermineRouteRequest', opts, callback);
};