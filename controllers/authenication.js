const signup = async (req, res, next) => {
	//! Fake logic for test route

	const existingUser = true;
	const existingEmail = true;

	if (existingUser || existingEmail) {
		res.status(422).send({ error: 'Username or Email is in use' });
	} else {
		try {
			res.status(200).send({ message: 'Signup successful' });
		} catch (err) {
			res.status(500).send('Failed Signup', err);
		}
	}
};

module.exports = {
	signup,
};
