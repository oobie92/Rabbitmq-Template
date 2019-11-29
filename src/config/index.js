'use strict'

require('dotenv').config();

module.exports = { 
    port: process.env.PORT,
    conn_url: process.env.CONN_URL 
};