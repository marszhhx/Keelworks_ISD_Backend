const router = require('express').Router();

const { 

    createRequest,
    getAllRequests,
    getSingleRequest,
    // getRequest,

} = require('../../controllers/requestController');


router.post('/', createRequest);
router.get('/:id', getSingleRequest);
router.get('/', getAllRequests);


module.exports = router;