const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');
const validator = require('../utilities/validation.js');

// get breakfast by id
router.get('/:id', baseController.getSingle);

// get all breakfast
router.get('/', baseController.getAll);

// create a new breakfast
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a breakfast by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// remove a breakfast by id 
router.delete('/:id', baseController.deleteSingle);


module.exports = router;