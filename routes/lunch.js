const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');

// get lunch by id
router.get('/:id', baseController.getSingle);

// get all lunches
router.get('/', baseController.getAll);

// delete one lunch
router.delete('/:id', baseController.deleteSingle)


module.exports = router;