const express = require('express');
const router = express.Router();
const Authentication = require('../controllers/authenication');

//! Fake test routes
router.post('/signup', Authentication.signup);

router.get('/test', (req, res) => {
	try {
		res.send({ hi: 'there' });
	} catch (error) {
		console.error(error.stack);
		res.status(500).send('Internal Server Error');
	}
});

router.post('/posttest', function (req, res) {
	try {
		const data = req.body;

		data['new property'] = 'added property test';

		let json = JSON.stringify(data);
		res.send(json);
	} catch (error) {
		console.error(error.stack);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
