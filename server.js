const express = require ('express');

const app = express();

const nodemailer = require('nodemailer');

require("dotenv").config();

const PORT = process.env.PORT || 5000;

//STATIC FILE MIDDLEWARE - LETS EXPRESS USE STATIC FILES
app.use(express.static('public_html'));

//MIDDLEWARE - RECEIVE INFO FROM FORM
app.use(express.json())


app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public_html/contact.html')
})

//CREATE A POST ROUTE
app.post('/', (req, res)=>{
	console.log(req.body)
	
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS
		}
	})
	
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
	
})

app.listen (PORT, ()=>{
	console.log(`Server running on port ${PORT}`)
})

