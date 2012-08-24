describe('decarta geocoding tests', function() {
    var dws = require('../dist/commonjs/dws'),
        testdata = require('./helpers/testdata'),
        expect = require('expect.js'),
        util = require('util'),
        proxyHost = 'http://107.20.247.122:8888',
        provider;

    before(dws.configure.bind(null, testdata.config));
    
    testdata.addresses.forEach(function(address) {
        it('should be able to geocode: ' + address.type, function(done) {
            dws.geocode(address.input, function(err, results) {
                if (address.noresults) {
                    expect(err).to.be.ok();
                }
                else {
                    expect(err).to.not.be.ok();
                    expect(results.length).to.be.above(0);
                    expect(results[0].address).to.be.ok();
                    expect(results[0].pos).to.be.ok();
                    expect(results[0].address.toString()).to.not.equal('[object Object]');
                }
                
                done(address.noresults ? null : err);
            });
        });

        it('should be able to geocode (via proxy): ' + address.type, function(done) {
            dws.geocode(address.input, { proxy: proxyHost }, function(err, results) {
                if (address.noresults) {
                    expect(err).to.be.ok();
                }
                else {
                    expect(err).to.not.be.ok();
                    expect(results.length).to.be.above(0);
                    expect(results[0].address).to.be.ok();
                    expect(results[0].pos).to.be.ok();
                    expect(results[0].address.toString()).to.not.equal('[object Object]');
                }
                
                done(address.noresults ? null : err);
            });
        });
    });
});