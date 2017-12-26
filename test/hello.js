const assert = require( 'assert' );
const request = require( 'request' );
const app = require( '../index.js' );

const base_url = 'http://localhost:3000';



describe( 'GET /', () => {
    it( 'Fetch homepage', (done) => {
        request.get( base_url, (err, res, body) => {
            assert.equal( 200, res.statusCode );

            app.closeServer();
            done();
        });
    });
});
