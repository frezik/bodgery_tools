const assert = require( 'assert' );
const request = require( 'request' );
const tools_app = require( '../lib/routes.js' );

const port = 3001;
const base_url = 'http://localhost:' + port;


describe( 'GET /v1/tools', () => {
    beforeEach( () => {
        tools_app.init({
            testdb: true,
            port: port
        });
    });
    afterEach( () => {
        tools_app.closeServer();
    });


    it( 'Fetch tool list', (done) => {
        request.get( base_url + '/v1/tools', (err, res, body) => {
            assert.equal( 200, res.statusCode );
            assert.equal( "application/json; charset=utf-8",
                res.headers['content-type'] );

            var tool_list = JSON.parse( body );
            assert( tool_list.length > 0, "Tool list returned" );
            done();
        });
    });
});
