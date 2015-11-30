var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usernames = {};

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('CONNECT', socket.id);
  socket.on('log on', function(name){
      console.log('LOG ON ' + name);
      usernames[socket.id] = name;
      io.emit('log on', name);
  })
  socket.on('disconnect', function(){
    console.log('DISCONNECT', socket.id);
    socket.broadcast.emit('log off', usernames[socket.id]);
    if (socket.id in usernames) {
        delete usernames[socket.id];
    }
  });
  socket.on('chat message', function(msg){
    console.log('MESSAGE', msg.username, msg.message);
    socket.broadcast.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
