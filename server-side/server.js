var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', function (socket) {

    console.log(socket.id + " Connected...!");

    socket.on("disconnect",msg=>{
        console.log(socket.id + " Disconnected...!")
    });

    socket.on('sending message', (message) => {
        console.log('Message is received :', message);
        socket.broadcast.emit('new message', {message: message});
        socket.emit('new message', {message: message});
    });

});

server.listen(3500);