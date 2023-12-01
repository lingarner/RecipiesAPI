const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');
const validator = require('../utilities/validation.js');

// get dessert by id
router.get('/:id', baseController.getSingle);

// get all desserts
router.get('/', baseController.getAll);

// create a new desert
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a desert by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// delete one dessert
router.delete('/:id', baseController.deleteSingle)


module.exports = router;