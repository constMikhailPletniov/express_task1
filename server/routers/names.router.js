const router = require('express').Router();

const { nameControllers } = require('../controllers');

router.get('/', nameControllers.getNamesByInterval);

module.exports = router;