const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');

// get dinner by id
router.get('/:id', baseController.getSingle);

// get all dinners
router.get('/', baseController.getAll);

// delete one dinner
router.delete('/:id', baseController.deleteSingle)


module.exports = router;