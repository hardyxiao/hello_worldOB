var express = require('D:/soft/nodejs/node_modules/express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);