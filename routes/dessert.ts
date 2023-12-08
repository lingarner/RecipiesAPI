import express, { Router } from 'express';
import * as baseController from '../controllers/baseController';
import * as validator from '../utilities/validation';

const router: Router = express.Router();

// get dessert by id
router.get('/:id', baseController.getSingle);

// get all desserts
router.get('/', baseController.getAll);

// create a new desert
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a desert by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// delete one dessert
router.delete('/:id', baseController.deleteSingle);

export default router;
