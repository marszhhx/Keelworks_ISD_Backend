const { User } = require('../config/database');

const signup = async (req, res, next) => {
	//! fake logic just for test, rewrite later
	const email = req.body.email;
	const name = req.body.name;
	const password = req.body.password;

	console.log(email, 'eemil');

	try {
		const existingUser = await User.findOne({
			where: {
				email: email,
			},
		});

		if (existingUser) {
			return res
				.status(422)
				.send({ error: 'Username or Email is in use' });
		} else {
			// need to encrpt presave probably in the model
			//! this saves password unhashed needs refactoring
			const user = await new User({
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

module.exports = {
	signup,
};
