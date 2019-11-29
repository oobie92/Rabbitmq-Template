'use strict'

const connectRabbit = require('../services/MQService');

module.exports = async function (req, res){
    const { queueName, payload } = req.body;

    let result = await connectRabbit(queueName, payload);
    console.log(result);

    res.status(200).send({message: 'OK'});
}