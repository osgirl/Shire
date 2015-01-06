var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

mongoose.connect('mongodb://heroku_app32772110:7qjr21sthg4aln2u4psmi3ft3g@ds047020.mongolab.com:47020/heroku_app32772110/shire');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(callback){
	console.log("Connected to database!");
});

var routes = require('./routes/index');
var history = require('./routes/history');
var people = require('./routes/people');
var login = require('./routes/login');
var events = require('./routes/events');
var movies = require('./routes/movies');
var photos = require('./routes/photos');
var balls = require('./routes/balls');
var users = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'blahblah', 
                 saveUninitialized: true,
                 resave: true}));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use('/', routes);
app.use('/home',routes);
app.use('/history',history);
app.use('/people',people);
app.use('/login',login);
app.use('/events',events);
app.use('/movies',movies);
app.use('/photos',photos);
app.use('/balls',balls);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
