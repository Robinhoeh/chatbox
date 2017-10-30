console.log("hello from server.js");

var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client') );

//socket.io
var io = require('socket.io')(server);

io.on('connection', function() {
	socket.io('message', function (msg) {
	io.emit('message', msg);
	})
});
//socket.io


server.listen(8080, function(){//tell server to listen to port 8080
	console.log('Chat server running...');
});