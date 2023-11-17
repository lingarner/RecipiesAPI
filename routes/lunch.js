const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');

// get lunch by id
router.get('/:id', baseController.getSingle);

// get all lunches
router.get('/', baseController.getAll);

// create a new lunch
router.post('/', baseController.addSingle);

// update a lunch by id 
router.put('/:id', baseController.editSingle);

// delete one lunch
router.delete('/:id', baseController.deleteSingle)


module.exports = router;