const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
	return res.send('Wrong route!');
});

module.exports = router;
