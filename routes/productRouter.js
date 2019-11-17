const express = require('express');
const router = express.Router();
const {index,create} = require('../controller/products-controller')

router.get('/', index)
router.post('/test',express.json(), create)

module.exports = () => router