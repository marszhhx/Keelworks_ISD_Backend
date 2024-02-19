const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Define other routes
// router.get('/', (req, res) => {
// 	res.send('Welcome to the homepage!');
//   });

router.use((req, res) => {
	return res.send('Wrong route!!');
});

module.exports = router;
