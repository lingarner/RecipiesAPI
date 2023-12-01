const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');
const validator = require('../utilities/validation.js');

// get dinner by id
router.get('/:id', baseController.getSingle);

// get all dinners
router.get('/', baseController.getAll);

// create a new dinner
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a dinner by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// delete one dinner
router.delete('/:id', baseController.deleteSingle)


module.exports = router;