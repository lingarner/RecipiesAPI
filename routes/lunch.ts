import express, { Router } from 'express';
import * as baseController from '../controllers/baseController';
import * as validator from '../utilities/validation';

const router: Router = express.Router();

// get lunch by id
router.get('/:id', baseController.getSingle);

// get all lunches
router.get('/', baseController.getAll);

// create a new lunch
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);

// update a lunch by id 
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);

// delete one lunch
router.delete('/:id', baseController.deleteSingle);

export default router;
