const express = require ('express');
const app = express();
const bodyParser = require('body-parser'); // Middleware
app.use(bodyParser.urlencoded({ extended: false }));

const { check, validationResult } = require('express-validator');

const nodemailer = require('nodemailer');
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen (PORT, ()=>{
	console.log(`Server running on port ${PORT}`)
})

//STATIC FILE MIDDLEWARE - LETS EXPRESS USE STATIC FILES
app.use(express.static('public_html'));

//MIDDLEWARE - RECEIVE INFO FROM FORM
app.use(express.json())


app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public_html/contact.html')
})

// Validation rules.
var loginValidate = [
	check('name')
	.isLength({ min: 2, max: 100 })
	.escape()
	.ltrim()
	.rtrim(),
	
	check('subject')
	.isLength({ min: 3, max: 100 })
	.escape()
	.ltrim()
	.rtrim(),

	check('email')
	.isEmail()
	.trim()
	.escape()
	.normalizeEmail(),

	check('message')
	.trim()
	.isLength({ min: 5, max: 1000 })
	.escape()
	.ltrim()
	.rtrim()

  ];

//CREATE A POST ROUTE
app.post('/', loginValidate, (req, res)=>{
	
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
	return res.status(422).json({ errors: errors.array() });
  }
  else{
	  
	  //MAIL CODE

		const transporter = nodemailer.createTransport({
			host: "siteground354.com", /*i think this might be working, need to check authentication*/
			port: 465,
			secure: false, // upgrade later with STARTTLS
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASS
			}
		})

		/*const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASS
			}
		})*/
		
		const mailOptions = {
			from: req.body.email,
			to: process.env.EMAIL,
			subject: `Message from ${req.body.email}: ${req.body.subject}`,
			text: req.body.message
		}
		
		transporter.sendMail(mailOptions, (error, info)=>{
			if(error){
				console.log(error);
				res.send('error');
			}else{
				console.log('Email sent: ' + info.response)
				res.send('success')
			}
		})
		
		let message = req.body.message;
		res.send(`message: ${message}`);
	}
});

