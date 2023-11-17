const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');

// get dessert by id
router.get('/:id', baseController.getSingle);

// get all desserts
router.get('/', baseController.getAll);

// delete one dessert
router.delete('/:id', baseController.deleteSingle)


module.exports = router;