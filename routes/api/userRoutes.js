const router = require('express').Router();

const { 

    getUser,
    getAllUsers

} = require('../../controllers/userController');


router.get('/:id', getUser);
router.get('/', getAllUsers);


module.exports = router;