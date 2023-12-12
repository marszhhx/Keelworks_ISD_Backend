const router = require('express').Router();

const testRoutes = require('./testRoutes');
const authRoutes = require('./auth');
router.use('/tests', testRoutes); //http://localhost:3000/api/tests/test
router.use('/auth', authRoutes);

module.exports = router;