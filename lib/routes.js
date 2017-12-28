const express = require('express');
const app = express();
const sqlite_db = require( './db/sqlite.js' );
var exports = module.exports = {};

const TEST_DB = 'db/sqlite.db';
var db;
var server;


function init( args )
{
    var testdb = args.testdb || false;
    var port = args.port || 3000;

    db = testdb
        ? open_test_db()
        : open_db();

    server = app.listen( port, () => {
        console.log( 'Bodgery Tool Access API listening on port ' + port )
    });
}

function open_test_db()
{
    sqlite_db.init( TEST_DB );
    return sqlite_db;
}

function open_db()
{
    // TODO
}


app.get( '/', (req, res) => res.send( 'Bodgery Tool Access API' ) );
app.get( '/v1/is-allowed/:rfid/:tool', (req, res) => {
    var rfid = req.params.rfid;
    var tool = req.params.tool;
    db.is_allowed( rfid, tool, res )
});
app.get( '/v1/tools', (req, res) => {
    db.tools( res );
});


exports.closeServer = function() {
    server.close();
};
exports.init = init;
