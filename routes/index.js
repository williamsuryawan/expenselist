const express = require('express');
const router = express.Router();

// console.log("hello here =====")
router.get('/')
router.use('/petarticle', require('./article'));

module.exports = router;