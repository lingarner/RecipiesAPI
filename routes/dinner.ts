import express, { Router } from 'express';
import * as baseController from '../controllers/baseController';
import * as validator from '../utilities/validation';

const router: Router = express.Router();

// get dinner by id
router.get('/:id', baseController.getSingle);

// get all dinners
router.get('/', baseController.getAll);

// create a new dinner
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a dinner by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// delete one dinner
router.delete('/:id', baseController.deleteSingle);

export default router;
