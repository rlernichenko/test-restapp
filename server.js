var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./app/connection');
var routes = require('./app/routes');

var app = express();
app.use(express.static('./web'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});