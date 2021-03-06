var express = require('express');
var router = express.Router();
var paraIndexController = require('../controller/paraIndexController');

router.post('/createIndex', paraIndexController.createIndex);
router.post('/searchTerm',paraIndexController.searchIndex);
router.delete('/clearIndexes',paraIndexController.clearIndex);

module.exports = router;