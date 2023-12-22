const router = require('express').Router();

const { 

    // signup,
    registerUser,
    loginUser

} = require('../../controllers/authentication');

// router.post('/signup', signup);
router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;
