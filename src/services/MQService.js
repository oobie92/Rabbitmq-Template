'use strict'

var q = 'tasks';

const amqp = require('amqplib/callback_api')

const { conn_url } = require('../config');

function bail(err) {
    console.error(err);
    process.exit(1);
  }

// Publisher
function publisher(conn) {
    conn.createChannel(on_open);
    function on_open(err, ch) {
      if (err != null) bail(err);
      ch.assertQueue(q);
      ch.sendToQueue(q, Buffer.from('something to do'));
    }
}
  
// Consumer
function consumer(conn) {
var ok = conn.createChannel(on_open);
function on_open(err, ch) {
    if (err != null) bail(err);
    ch.assertQueue(q);
    ch.consume(q, function(msg) {
    if (msg !== null) {
        console.log(msg.content.toString());
        ch.ack(msg);
    }
    });
}
}


module.exports = async (queueName, data) => {
    amqp.connect(conn_url, function(err, conn) {
        if (err != null) bail(err);
        // consumer(conn);
        publisher(conn);
    });
}    