const router = require('express').Router();

const testRoutes = require('./testRoutes');
const authRoutes = require('./auth');
// const userRoutes = require('./userRoutes');

router.use('/tests', testRoutes);
router.use('/auth', authRoutes);
// router.use('/users', userRoutes);

module.exports = router;
