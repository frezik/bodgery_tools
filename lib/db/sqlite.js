const sqlite = require( 'sqlite' );
var exports = module.exports = {};

var db_promise;


exports.init = function( db_path ) {
    db_promise = sqlite.open( db_path, { Promise });
};

exports.is_allowed = function( rfid, tool_name ) {
};

exports.tools = async function( res ) {
    try {
        const db = await db_promise;
        var tools = await db.all( 'SELECT name FROM tools' );
        var tools_formatted = tools.map( obj => obj.name );
        res.send( tools_formatted );
    }
    catch (err) {
        console.log( "DB error: " + err );
    };
};
