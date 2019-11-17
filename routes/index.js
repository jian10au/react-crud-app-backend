const express = require('express');
const router = express.Router();
const productRouter = require('./productRouter')

router.get('/',(req,res) => res.send('index'));
router.use('/products', productRouter())

module.exports = () => router;