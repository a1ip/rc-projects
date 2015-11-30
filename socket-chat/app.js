var app = require('express')();
var http = require('http').Server(app);

app.listen(3000, function(){
  console.log('listening on *:3000');
});


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
