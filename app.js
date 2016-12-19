/* jshint esnext: true */

var express       = require('express');
var routes        = require('./routes/index');
var cookieParser  = require('cookie-parser');
var logger        = require('winston');
var app           = express();

//Set up logging
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console,{timestamp:true,colorize:true,level:'debug'});

//Set up UI framework
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Setup static routing path
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
 
//Route all traffic to router
app.use('/', routes);
 
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
 
var listener = app.listen(8000,function(){
  console.log(`Listening on port ${listener.address().port}.`);
});