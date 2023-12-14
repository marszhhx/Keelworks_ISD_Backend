const router = require('express').Router();

const { postTest, getTest } = require('../../controllers/testController');

router.post('/posttest', postTest);
router.get('/test', getTest);

// router.delete('/:id',deleteTestPost);

module.exports = router;
