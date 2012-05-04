// req: timelord

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
    dws('DetermineRouteRequest', opts, function(err, response) {
        // if we don't have an error, then extract the useful stuff from the response
        if (! err) {
            callback(null, {
                geometry: response.RouteGeometry.LineString.pos,
                instructions: parseInstructions(response.RouteInstructionsList)
            });
        }
        else {
            callback(err);
        }
    });
};

function parseInstructions(instructionList) {
    var fnresult = [],
        instructions = instructionList && instructionList.RouteInstruction ? 
            instructionList.RouteInstruction : [];
            
    for (var ii = 0; ii < instructions.length; ii++) {
        // initialise the time and duration for this instruction
        var distance = instructions[ii].distance;
        
        fnresult.push({
            text: instructions[ii].Instruction,
            latlng: instructions[ii].Point,
            distance: distance.value + (distance.uom || 'M').toUpperCase(),
            time: timelord(instructions[ii].duration, '8601')
        });
    } // for
    

    // T5.log("parsed " + fnresult.length + " instructions", fnresult[0], fnresult[1], fnresult[2]);
    return fnresult;
} // parseInstructions