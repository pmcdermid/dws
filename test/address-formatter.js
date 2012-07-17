describe('address formatting tests', function() {
    var dws = require('../dist/commonjs/dws'),
        assert = require('assert'),
        addresses = require('./helpers/testdata').addresses;
        
    addresses.forEach(function(address) {
        it('should be able to create xml for: ' + address.type, function() {
            var results = dws.addressToXML(address.input);
            
            assert.equal(results[0], address.output[0]);
        });
    });
});