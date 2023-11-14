const express = require('express');
const router = new express.Router();
// const swagger = require('./swagger.js')
const breakfastRoute = require('./breakfast-routes.js')
const controller = require('../controller/controller.js');

// route for the swagger ui
router.use("/", swagger)

// route to get all trails
router.get('/breakfast', breakfastRoute)



module.exports = router