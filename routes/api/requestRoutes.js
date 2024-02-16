const router = require('express').Router();

const { 

    createRequest,
    // getRequest,

} = require('../../controllers/requestController');


router.post('/', createRequest);
// router.get('/', getRequest);


module.exports = router;