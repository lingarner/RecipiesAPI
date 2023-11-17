const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');

// get breakfast by id
router.get('/:id', baseController.getSingle);

// get all breakfast
router.get('/', baseController.getAll);

// create a new breakfast
//router.post('/', baseController.createAuthor);

// update a bobreakfastok by id 
//router.put('/:id', baseController.updateAuthor);

// remove a breakfast by id 
router.delete('/:id', baseController.deleteAuthor);


module.exports = router;