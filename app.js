var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');
var querystring = require('querystring');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// var mongodb = require('mongodb');
// var mongoose = require('mongoose');
// mongoose.connect('localhost', 'test');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//   console.log('Connected to DB');
// });


var users = require('./routes/user');
var contacts = require('./routes/contacts');
var login = require('./routes/login');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.set('port',process.env.PORT || 8000)
app.use(favicon());
app.use(logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', users.list);
app.get('/contacts',contacts.index);
app.get('/login',login.index);



//app.get('/', routes.index);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

// production error handler
// no stacktraces leaked to user
// view engine setup


app.get('/',function(req,res,next){
    res.render('index',{title:'Shire'});
    res.end();
})
app.get('/home',function(req,res,next){
    res.render('index',{title:'Shire'});
    res.end();
})
app.get('/events',function(req,res,next){
    res.render('events',{title:'Shire'});
    res.end();
})

app.get('/movies',function(req,res,next){
    res.render('movies',{title:'Shire'});
    res.end();
})
app.get('/photos',function(req,res,next){
    res.render('photos',{title:'Shire'});
    res.end();
})

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home');
});

http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listening on port '+app.get('port'));
});

module.exports = app;
