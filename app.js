const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

const app =  express();
// Passport Config
require('./config/passport')(passport);

// Connect To MongoDB Locally
const mongoUrl = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitness';
mongoose.connect(mongoUrl, {useNewUrlParser:true})
	.then(
		()=>{console.log(`MongoDB connected on ${mongoUrl}`)},
		err=>{console.log(err)}
		)



//MongDB Configuration
// const db = require('./config/keys').MongoURI;

// // Connect To Mongoose
// mongoose.connect(db, {useNewUrlParser:true})
// 	.then(()=>console.log('MongoDB Connected...'))
// 	.catch((err)=>console.log(err));



// EJS

app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({extended: false}));

// Express Session Middleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Initiate Flash
app.use(flash());
// Global Variables
app.use((req,res,next)=>{
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});

// Set Static Directory
app.use('/main', express.static(path.join(__dirname,'static')));


// Connect Flash
app.use(flash());


const PORT = process.env.PORT || 5000;

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));