const express = require('express');
const router = new express.Router();
const controller = require('../controller/controller')


router.get("/", controller.listAllFood)