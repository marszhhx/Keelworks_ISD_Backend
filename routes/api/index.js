const router = require('express').Router();
const testRoutes = require('./testRoutes');
const authRoutes = require('./auth');

router.use('/tests', testRoutes);
router.use('/auth', authRoutes);

module.exports = router;
