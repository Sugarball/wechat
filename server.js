//var http = require('http');
//var port = 18080;
//http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write('<h1>Node.js</h1>');
//    res.end('<p>Hello World</p>');
//}).listen(port);


var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var jsApiRoute = require('./routes/jsApiKey');
var weChatRoute = require('./routes/weChatRoute');

app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.query()); // Or app.use(express.query());

app.use(jsApiRoute);

app.use(weChatRoute);


/**
 * Get port from environment and store in Express.
 */

var port = '18080';
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

