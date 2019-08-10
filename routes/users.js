const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User Model
const User = require('../models/User');


// Register Handle
router.post('/register', (req,res)=>{
	const { name, email, password, password2 } = req.body;
	let errors = [];

	// Check Required Fields
	if(!name || !email || !password || !password2){
		errors.push({ msg: 'Please fill in all fields'});
	}

	// Check Password Match
	if(password != password2){
		errors.push({ msg: 'Passwords do not match'});
	}

	// Check Password Length
	if(password.length<6){
		errors.push({ msg: 'Password must be at least 6 characters'});
	}

	//
	if(errors.length>0){
		res.render('layout', {
			errors,
			name,
			email,
			password,
			password2
		});
	}else{
		// Validation Passed
		// Check if User Exists
		User.findOne({email: email}).then(user =>{
			if(user){
				// User Exists Already
				errors.push({ msg: 'Email is already registered'});
				console.log('Email is already registered');
				res.render('layout',{
					errors,
					name,
					email,
					password,
					password2
				});
			}else{
				const newUser = new User({
					name,
					email,
					password
				});
				console.log(newUser);

				
				// Hash Password
				bcrypt.genSalt(10, (err,salt)=>{
					bcrypt.hash(newUser.password,salt, (err,hash)=>{
						if(err) throw err;

						// Set password to hashed password
						newUser.password = hash;

						newUser
							.save()
							.then(user=>{
								req.flash('success_msg', 'You Are Now Registered')
								res.redirect('/');
							})
							.catch(err=>{
								console.log(err);
							});
					});
				});
			}
		})
	}
})


// Login Handle
router.post('/login', (req,res, next)=>{
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/',
		failureFlash: true,
		successFlash: true,
	})(req,res,next);
	// req.flash('success_msg', 'You are now logged in');
});



// Logout Handle
router.get('/logout', (req,res)=>{
	req.logout();
	req.flash('success_msg', 'You have successfully logged out');
	res.redirect('/');
	
	//res.redirect('layout');
});

module.exports = router;