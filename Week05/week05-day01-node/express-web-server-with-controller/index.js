var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
