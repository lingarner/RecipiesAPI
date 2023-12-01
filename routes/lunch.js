const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');
const validator = require('../utilities/validation.js');

// get lunch by id
router.get('/:id', baseController.getSingle);

// get all lunches
router.get('/', baseController.getAll);

// create a new lunch
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a lunch by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// delete one lunch
router.delete('/:id', baseController.deleteSingle)


module.exports = router;