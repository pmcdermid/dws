describe('decarta query config tests', function() {
    var dws = require('../pkg/cjs/dws'),
        testdata = require('./helpers/testdata'),
        expect = require('expect.js'),
        provider;

    before(dws.configure.bind(null, testdata.config));
    
    it('should be able to query the current config and provide shareable info', function(done) {
        dws.queryConfig(function(err, config) {
            expect(err).to.not.be.ok();
            expect(config).to.be.ok();
            expect(config.hosts.length).to.be.above(0);
            expect(config.user).to.be.ok();
            expect(config.sessionId).to.be.ok();
            expect(config.mapConfig).to.be.ok();
            
            done(err);
        });
    });
});