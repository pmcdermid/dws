describe('decarta geocoding tests', function() {
    var dws = require('../pkg/cjs/dws'),
        testdata = require('./helpers/testdata'),
        expect = require('expect.js'),
        util = require('util'),
        provider;

    before(dws.configure.bind(null, testdata.config));
    
    testdata.addresses.forEach(function(address) {
        it('should be able to geocode: ' + address.type, function(done) {
            dws.geocode(address.input, function(err, results) {
                expect(err).to.not.be.ok();
                expect(results.GeocodeResponseList).to.be.ok();
                
                done(err);
            });
        });
    });
});