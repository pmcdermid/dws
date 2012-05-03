describe('address formatting tests', function() {
    var dws = require('../pkg/cjs/dws'),
        expect = require('expect.js');

    it('should be able to create a single freeform address', function() {
        var results = dws.addressToXML('A freeform address');
        
        expect(results).to.contain('<xls:Address countryCode="US" language="EN"><xls:freeFormAddress>A freeform address</xls:freeFormAddress></xls:Address>');
    });
    
    it('should be able to create a single structured address', function() {
        var results = dws.addressToXML({
            number: 123,
            street: 'QUEEN ST',
            regions: ['BRISBANE', 'QLD'],
            country: 'AU'
        });
        
        expect(results).to.contain('<xls:Address countryCode="AU" language="EN"><xls:StreetAddress><xls:Building number="123"/><xls:Street>QUEEN ST</xls:Street></xls:StreetAddress><xls:Place>BRISBANE</xls:Place><xls:Place>QLD</xls:Place></xls:Address>');
    });
});