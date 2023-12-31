const express = require('express');
const app = express();

require('./db/postgresConnection');
const syncDB = require('./dbSync');

syncDB();
app.get('/', (req, res) => {
    return res.status(200).json({status : 'OK'})
})

app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
})