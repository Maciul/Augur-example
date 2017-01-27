var fs = require('fs');
var http = require('http');

//HTTPS SETUP 
// var https = require('https');
// var privateKey  = fs.readFileSync('./development-certs/key.pem', 'utf8');
// var certificate = fs.readFileSync('./development-certs/cert.pem', 'utf8');
// var credentials = {key: privateKey, cert: certificate, passphrase: 'bacon'};

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv').config();
var fingerprintjs = require('fingerprintjs');
var fingerprintjs2 = require('fingerprintjs2');

var index = require('./routes/index');
var users = require('./routes/users');
var pixel = require('./routes/pixel');
var form = require('./routes/form');


var app = express();

// var httpServer = http.createServer(app);
// // var httpsServer = https.createServer(credentials, app);
// httpServer.listen(8008);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

// app.use(function(req, res, next) {
//     var data = '';
//     req.setEncoding('utf8');
//     req.on('data', function(chunk) { 
//         data += chunk;
//     });
//     req.on('end', function() {
//         req.rawBody = data;
//         next();
//     });
// });

var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true; } }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/pixel', pixel);
app.use('/form', form);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
