const { User } = require('../config/database');
const {request} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const KEY = process.env.JWT_KEY;
const signup = async (req, res, next) => {
	//! fake logic just for test, rewrite later
	console.log(req.body)
	const {email, password, name} = req.body
	try {
		let existingUser = await User.findOne({email})
		if (existingUser) {
			return res
				.status(422)
				.send({ error: 'Username or Email is in use' });
		} else {
			await new User({
				email: email,
				name: name,
				password: password,
			}).save();
		}
		//need to send auth token here to client either in cookie or to localstorage
		res.status(200).send({ message: 'Signup successful' });
	} catch (err) {
		console.error('Error during signup:', err);
		res.status(500).send('Failed Signup');
	}
};

const login = async (req, res, next) => {
	console.log(req.body);
	const {email, password} = req.body
	try {
		let existingUser = await User.findOne({email})
		if (!existingUser) {
			return res
				.status(422)
				.send({ error: 'Email has not been registered' });
		} else {
			bcrypt.compare(password, password).then(isMatch => {
				if(isMatch){
					const payload = {
						email: email,
						password:password
					};
					/*sign token*/
					jwt.sign(
						payload,
						KEY,
						{
							expiresIn: 86400, // 1  in seconds
						},
						(err, token) => {
							/* Send success with token */
							res.status(200).send({
								success: true,
								token: "Bearer "+token,
								message: 'login successful'
							});
						},
					);
				}else{
					res.status(422).send({ error: 'Password is incorrect!' });
				}
			});
		}
	} catch (err) {
		console.error('Error during signup:', err);
		res.status(500).send('Failed login');
	}
};

module.exports = {
	signup,
	login
};
