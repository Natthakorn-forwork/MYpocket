const express = require('express');
const router = express.Router();

const MoneyController = require('../controller/MoneyController.js')

router.post('/', MoneyController.addMoney);


module.exports = router
