var testdata = {
    routes: {
        bne2syd: [
            { lat: -27.500, lon: 153.017 },
            { lat: -33.861, lon: 151.204 }
        ]
    },
    
    config: {
        user:   'Sidelab1',
        apikey: 'ca33f7bab68dc57a34f38afe3d627b07'
    },
    
    addresses: [{
        type: 'a single freeform address',
        input: 'Four North Second Street Suite 950 San Jose',
        output: [
            '<xls:Address countryCode="US" language="EN"><xls:freeFormAddress>Four North Second Street Suite 950 San Jose</xls:freeFormAddress></xls:Address>'
        ]
    }, {
        type: 'a single structured address',
        input: {
            number: 123,
            street: 'QUEEN ST',
            regions: ['BRISBANE', 'QLD'],
            country: 'AU'
        },
        output: [
            '<xls:Address countryCode="AU" language="EN"><xls:StreetAddress><xls:Building number="123"/><xls:Street>QUEEN ST</xls:Street></xls:StreetAddress><xls:Place type="Municipality">BRISBANE</xls:Place><xls:Place type="CountrySubdivision">QLD</xls:Place></xls:Address>'
        ]
    }]
};

if (typeof module != 'undefined') {
    module.exports = testdata;
}