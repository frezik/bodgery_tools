const assert = require( 'assert' );
const request = require( 'request' );
const tools_app = require( '../lib/routes.js' );

const port = 3002;
const base_url = 'http://localhost:' + port;


describe( 'GET /v1/is-allowed', () => {
    beforeEach( () => {
        tools_app.init({
            testdb: true,
            port: port
        });
    });
    afterEach( () => {
        tools_app.closeServer();
    });


    it( 'Allowed', (done) => {
        request.get( base_url + '/v1/is-allowed/100/laser',
            (err, res, body) => {
            assert.equal( 200, res.statusCode );
            done();
        });
    });

    it( 'RFID not found', (done) => {
        request.get( base_url + '/v1/is-allowed/200/laser',
            (err, res, body) => {
            assert.equal( 403, res.statusCode );
            done();
        });
    });

    it( 'Tool not found', (done) => {
        request.get( base_url + '/v1/is-allowed/100/foobar',
            (err, res, body) => {
            assert.equal( 403, res.statusCode );
            done();
        });
    });

    it( 'RFID not allowed', (done) => {
        request.get( base_url + '/v1/is-allowed/101/laser',
            (err, res, body) => {
            assert.equal( 403, res.statusCode );
            done();
        });
    });
});
