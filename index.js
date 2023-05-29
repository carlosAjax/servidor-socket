const express = require('express');
const { Module } = require('module');
const path = require('path');
require('dotenv').config();

// App de express
const app = express();


// Cear Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

// ejecutar el procedimiento del script
require('./sockets/socket');


// path publico
const pathPublic = path.resolve(__dirname,'public');
app.use(express.static(pathPublic));

server.listen(process.env.PORT,(err) => {
 if(err) throw new Error(err);

 console.log('servidor corriendo en el puerto!!!:',process.env.PORT);

})