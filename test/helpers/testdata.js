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
    }
};

if (typeof module != 'undefined') {
    module.exports = testdata;
}