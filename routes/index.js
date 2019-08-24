const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


// Welcome Page
router.get('/', (req,res)=>{
	res.render('layout');
});

// About Page
router.get('/about', (req,res)=>{
	res.render('about');
});

// Dashboard Page
router.get('/dashboard', ensureAuthenticated, (req,res)=>{
	res.render('dashboard', {
		name: req.user.name
	});
});

// Set Body parser for form data
router.use(bodyParser.json());

// Use Nodemailer to send data from contact form to email
router.post('/contact', (req,res)=>{
	console.log('contact submitted');

	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth : {
			user: 'richardtylerrockwell@gmail.com',
			pass: 'fojbjeeyzljnbebz'
		}
	});

	let mailOptions = {
		to: 'hilliardalexandra@gmail.com',
		subject: `Contact Received from ${req.body.contactName}`,
		html: `${req.body.contactName} has asked: '${req.body.contactContent}'. They can be contacted at: ${req.body.contactEmail}`

	};
	transporter.sendMail(mailOptions, (error,info)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Message Sent');
		}
	});

	res.redirect('/');
});
module.exports = router;