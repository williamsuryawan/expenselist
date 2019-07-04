const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/articleController')

// console.log("hello from shopping ====")
router.get('/', ArticleController.getAllList);
router.post('/', ArticleController.createList);

module.exports = router;