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