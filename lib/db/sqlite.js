const sqlite = require( 'sqlite' );
var exports = module.exports = {};

var db_promise;


exports.init = function( db_path ) {
    db_promise = sqlite.open( db_path, { Promise });
};

exports.is_allowed = async function( rfid, tool_name, res ) {
    try {
        const db = await db_promise;
        var exists = await db.get(
			`SELECT member_tools.id
                FROM
                    members
                JOIN member_tools ON member_tools.member_id = members.id
                JOIN tools ON tools.id = member_tools.tools_id
                WHERE members.rfid = ?
                    AND members.active = 1
                    AND tools.name = ?
			`, rfid, tool_name
        );

        var status_code = exists
            ? 200
            : 403;
        res.sendStatus( status_code );
    }
    catch (err) {
        console.log( "DB error: " + err );
    };
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
