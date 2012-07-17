describe('address formatting tests', function() {
    var dws = require('../dist/commonjs/dws'),
        expect = require('expect.js'),
        addresses = require('./helpers/testdata').addresses;
        
    addresses.forEach(function(address) {
        it('should be able to create xml for: ' + address.type, function() {
            var results = dws.addressToXML(address.input);

            expect(results).to.eql(address.output);
        });
    });
});