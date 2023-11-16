const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController.js');

// get desert by id
router.get('/:id', baseController.getSingle);

// get all desert
router.get('/', baseController.getAll);


module.exports = router;