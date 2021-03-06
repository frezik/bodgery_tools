const assert = require( 'assert' );
const request = require( 'request' );
const tools_app = require( '../lib/routes.js' );

const port = 3000;
const base_url = 'http://localhost:' + port;



describe( 'GET /', () => {
    beforeEach( () => {
        tools_app.init({
            testdb: true,
            port: port
        });
    });
    afterEach( () => {
        tools_app.closeServer();
    });


    it( 'Fetch homepage', (done) => {
        request.get( base_url, (err, res, body) => {
            assert.equal( 200, res.statusCode );
            done();
        });
    });
});
