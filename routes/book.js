//ROUTES
const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');
const auth = require('../configs/auth');

router.get('/', bookController.getAllBook);
router.post('/add', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
// router.get('/', auth.verifyToken, productController.getIndexProduct);


module.exports = router;