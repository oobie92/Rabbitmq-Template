const express = require('express');
const api = express.Router();

const controller = require('../controller');

api.get('/test', controller);

module.exports = api;