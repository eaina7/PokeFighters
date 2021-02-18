const express = require("express");
const router = express.Router();
const resultsContoller = require('../controllers/results')

router.get('/', resultsContoller.fight)


module.exports = router;
