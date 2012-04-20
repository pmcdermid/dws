// dep: superagent, handlebars, async, underscore

(function (glob) {
  
  var _templates = {
    'DetermineRouteRequest': '<xls:DetermineRouteRequest provideRouteHandle="{{ provideRouteHandle }}" distanceUnit="{{ distanceUnit }}" routeQueryType="{{ routeQueryType }}"><xls:RoutePlan><xls:RoutePreference>{{ routePreference }}</xls:RoutePreference><xls:WayPointList>{{{ waypoints }}}</xls:WayPointList></xls:RoutePlan></xls:DetermineRouteRequest>',
    'Request': '<xls:XLS version="1" xls:lang="en" xmlns:xls="http://www.opengis.net/xls" rel="{{ ddsVersion }}" xmlns:gml="http://www.opengis.net/gml"><xls:RequestHeader clientName="{{ user }}" clientPassword="{{ apikey }}" sessionID="{{ sessionId }}" configuration="{{ mapConfig }}" /><xls:Request maximumResponses="{{ maxResponses }}" version="{{ version }}" requestID="{{ requestId }}" methodName="{{ requestName }}">{{{ requestBody }}}</xls:Request></xls:XLS>',
    'RuokRequest': '<xls:RUOKRequest />'
  };
  
  
  // get the handlebars library
  var hbs = typeof Handlebars != 'undefined' ? Handlebars : handlebars,
      _ = underscore,
      sessionId = new Date().getTime(),
      ddsCurrentVersion = '4.5.2',
      nextRequestId = 1,
      handshakeResponse,
      
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
          ddsVersion: '4.5.2'
      };
      
  // compile the resources
  for (var key in _templates) {
      _templates[key] = hbs.compile(_templates[key]);
  }
  
  function configure(opts) {
      _.extend(defaultOpts, opts);
  }
  
  function createRequest(requestType, opts) {
      // if we don't have a template for the specified request type, then throw an error
      if (typeof _templates[requestType] != 'function') {
          throw new Error('Cannot find a template for a "' + requestType + '" request.');
      }
      
      // generate the inner content
      opts.requestBody = _templates[requestType](opts);
      
      // now return the inner content wrapped in the standard request
      return _templates.Request(opts);
  }
  
  function handshake(opts, callback) {
      // create the ruok request
      var body = createRequest('RuokRequest', opts);
      
      console.log(body);
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
      
      // initialise the request id
      opts.requestId = opts.requestId || nextRequestId++;
      
      // check handshake done
      handshake(opts, function(err, data) {
          // if we received an error, then fire the callback and return
          if (err) {
              callback(err);
              return;
          }
      });
  }
  
  // expose the create request and handshake functions
  dws.configure = configure;
  dws.createRequest = createRequest;
  dws.handshake = handshake;
  
  // include the other operations
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
      
      // ensure we have options
      opts = opts || {};
  
      // initialise DetermineRouteRequest tag attributes
      opts.provideRouteHandle = (typeof opts.provideRouteHandle != 'undefined' && opts.provideRouteHandle).toString();
      opts.distanceUnit = opts.distanceUnit || 'KM';
      opts.routeQueryType = opts.routeQueryType || 'RMAN';
  
      // initialise the route preference option
      opts.routePreference = opts.routePreference || 'fastest';
      
      // create the waypoint tags manually
      // only need to do this because of the StartPoint, EndPoint, ViaPoint tag names :/
      for (var ii = 0, count = points.length; ii < count; ii++) {
          // determine the appropriate tag to use for the waypoint
          // as to why this is required, who knows....
          var tagName = (ii === 0 ? "StartPoint" : (ii === waypoints.length-1 ? "EndPoint" : "ViaPoint"));
          
          waypoints += '<xls:' + tagName + '><xls:Position><gml:Point><gml:pos>' + 
              points[ii].lat + ', ' + points[ii].lon + 
              '</gml:pos></gml:Point></xls:Position></xls:' + tagName + '>';
      }
      
      // add the the waypoints to the options
      opts.waypoints = waypoints;
      
      // run the request
      dws('DetermineRouteRequest', opts, callback);
  };
  
  glob.dws = dws;
  
})(this);