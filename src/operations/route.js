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