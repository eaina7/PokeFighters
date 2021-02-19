const express = require("express");
const router = express.Router();
const resultsContoller = require('../controllers/results')

router.post('/', resultsContoller.fight)


module.exports = router;
