// const { User } = require('../config/database');

const { User } = require('../models');
const bcrypt = require('bcrypt');



const registerUser = async (req, res) => {
	try {
		console.log(req.body)
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		console.log("in try")
		const newUser = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: hashedPass,
		});
		
		res.status(201).json(newUser);
		console.log('yes')
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error' });
	}
};

const loginUser = async (req, res) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } });
		
		if (!user) {
			return res.status(400).json('Wrong credentials!');
		}
		
		const validated = await bcrypt.compare(req.body.password, user.password);
		
		if (!validated) {
			return res.status(400).json('Wrong credentials!');
		}
		
		const { password, ...others } = user.toJSON();
		
		res.status(200).json(others);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error' });
	}
};


module.exports = {
	// signup,
	registerUser,
	loginUser
};

//================ AUTHENTICATION & AUTHORIZATION [ DO NOT DELETE!!!!]==========================


// const registerUser = async (req, res) => {
// 	try {
// 		console.log(req.body)
// 		const salt = await bcrypt.genSalt(10);
// 		const hashedPass = await bcrypt.hash(req.body.password, salt);
// 		console.log("in try")
// 		const newUser = await User.create({
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: hashedPass,
// 		});
		
// 		res.status(201).json(newUser);
// 		console.log('yes')
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// };



// const loginUser = async (req, res) => {
// 	try {
// 		const user = await User.findOne({ where: { email: req.body.email } });
		
// 		if (!user) {
// 			return res.status(400).json('Wrong credentials!');
// 		}
		
// 		const validated = await bcrypt.compare(req.body.password, user.password);
		
// 		if (!validated) {
// 			return res.status(400).json('Wrong credentials!');
// 		}
		
// 		const { password, ...others } = user.toJSON();
		
// 		res.status(200).json(others);


// const { User } = require('../config/database');
// const {request} = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const KEY = process.env.JWT_KEY;
// const signup = async (req, res, next) => {
// 	//! fake logic just for test, rewrite later
// 	console.log(req.body)
// 	const {email, password, name} = req.body
// 	try {
// 		let existingUser = await User.findOne({email})
// 		if (existingUser) {
// 			return res
// 				.status(422)
// 				.send({ error: 'Username or Email is in use' });
// 		} else {
// 			await new User({
// 				email: email,
// 				name: name,
// 				password: password,
// 			}).save();
// 		}
// 		//need to send auth token here to client either in cookie or to localstorage
// 		res.status(200).send({ message: 'Signup successful' });
// >>>>>>> authentication
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// };


// const login = async (req, res, next) => {
// 	console.log(req.body);
// 	const {email, password} = req.body
// 	try {
// 		let existingUser = await User.findOne({email})
// 		if (!existingUser) {
// 			return res
// 				.status(422)
// 				.send({ error: 'Email has not been registered' });
// 		} else {
// 			bcrypt.compare(password, password).then(isMatch => {
// 				if(isMatch){
// 					const payload = {
// 						email: email,
// 						password:password
// 					};
// 					/*sign token*/
// 					jwt.sign(
// 						payload,
// 						KEY,
// 						{
// 							expiresIn: 86400, // 1  in seconds
// 						},
// 						(err, token) => {
// 							/* Send success with token */
// 							res.status(200).send({
// 								success: true,
// 								token: "Bearer "+token,
// 								message: 'login successful'
// 							});
// 						},
// 					);
// 				}else{
// 					res.status(422).send({ error: 'Password is incorrect!' });
// 				}
// 			});
// 		}
// 	} catch (err) {
// 		console.error('Error during signup:', err);
// 		res.status(500).send('Failed login');
// 	}
// };


// const signup = async (req, res, next) => {
// 	//! fake logic just for test, rewrite later
// 	const email = req.body.email;
// 	const name = req.body.name;
// 	const password = req.body.password;

// 	console.log(email, 'eemil');

// 	try {
// 		const existingUser = await User.findOne({
// 			where: {
// 				email: email,
// 			},
// 		});

// 		if (existingUser) {
// 			return res
// 				.status(422)
// 				.send({ error: 'Username or Email is in use' });
// 		} else {
// 			// need to encrpt presave probably in the model
// 			//! this saves password unhashed needs refactoring
// 			const user = await new User({
// 				email: email,
// 				name: name,
// 				password: password,
// 			}).save();
// 		}

// 		//need to send auth token here to client either in cookie or to localstorage

// 		res.status(200).send({ message: 'Signup successful' });
// 	} catch (err) {
// 		console.error('Error during signup:', err);
// 		res.status(500).send('Failed Signup');
// 	}
// };
