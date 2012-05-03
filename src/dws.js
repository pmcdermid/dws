// req: jsonget, handlebars, async, underscore

//=collate ../templates

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
    var results = [],
        parser = _templates.Address;
        
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
        var data;
        
        // if the specified address is a string, then convert into a tmp object
        if (typeof address[ii] == 'string' || (address[ii] instanceof String)) {
            data = _.extend({}, opts, {
                text: address[ii]
            });
        }
        else {
            data = _.extend({}, opts, address[ii]);
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
//= operations