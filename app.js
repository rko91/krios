// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').load()
// }

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');
let pgp = require('pg-promise')();
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');
var aboutRouter = require('./routes/about');
var imageRouter = require('./routes/images');
var contactRouter = require('./routes/contact');

const app = express();

// View Engine Setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/about', aboutRouter);
app.use('/images', imageRouter);
app.use('/contact', contactRouter);

// mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true});
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('Connected to Mongoose'));

// Catch 404 and forward to Error Handler
app.use(function(req, res, next) {
    next(createError(404));
});

// Error Handler
app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
})

module.exports = app;
