const router = require('express').Router();

const { nameControllers } = require('../controllers');

router.get('/last_user', nameControllers.getLastUser);
router.get('/', nameControllers.getNamesByInterval);
router.post('/', nameControllers.postNewUser);

module.exports = router;