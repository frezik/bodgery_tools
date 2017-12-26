const express = require('express');
const app = express();
var exports = module.exports = {};

app.get( '/', (req, res) => res.send( 'Bodgery Tool Access API' ) );
app.get( '/v1/is-allowed/:rfid/:tool',
    (req, res) => '' ); // TODO
app.get( '/v1/tools',
    (req, res) => '' ); // TODO


var server = app.listen( 3000, () => {
    console.log( 'Bodgery Tool Access API listening on port 3000')
});

exports.closeServer = function() {
    server.close();
};
