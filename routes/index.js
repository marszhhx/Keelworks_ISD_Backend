const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => { //This serves as a fallback mechanism to catch any requests made to undefined routes and return a meaningful response to the client, rather than just returning a 404 error.
    return res.send('Wrong route!');
  });

//eventually add react front end code for production


module.exports = router;