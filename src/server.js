const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = require('./router');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/', router);

app.get('/', (req, res) => {
    res.send('Server listening');
});

module.exports = app;