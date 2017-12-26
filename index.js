const express = require('express');
const app = express();

app.get( '/', (req, res) => res.send( 'Bodgery Tool Access API' ) );
app.get( '/is-allowed/:rfid/:tool',
    (req, res) => '' ); // TODO
app.get( '/tools',
    (req, res) => '' ); // TODO


app.listen( 3000, () => console.log( 'Example app listening on port 3000'));
