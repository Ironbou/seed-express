var express = require('express');
var path = require ('path');

var app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('*', function(req, res, next) {
  res.render('../dist/index.html');
});

app.set('port', 80);
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('listen port:80');
});