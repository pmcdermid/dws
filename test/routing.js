describe('decarta routing engine tests', function() {
    var dws = require('../pkg/cjs/dws'),
        testdata = require('./helpers/testdata'),
        expect = require('expect.js'),
        provider;

    before(dws.configure.bind(null, testdata.config));
    
    it('should be able to calculate a route using two points', function(done) {
        dws.route(testdata.routes.bne2syd, function(err, route) {
            expect(err).to.not.be.ok();
            expect(route).to.be.ok();
            expect(route.instructions).to.be.ok();
            expect(route.geometry).to.be.ok();
            
            // console.log(err, route);
            done(err);
        });
    });
});