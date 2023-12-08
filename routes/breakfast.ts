// your router file

import express, { Router } from 'express';
import * as baseController from '../controllers/baseController';
import * as validator from '../utilities/validation';

const router: Router = express.Router();

router.get('/:id', baseController.getSingle);
router.get('/', baseController.getAll);
router.post('/', validator.newRecipe, validator.checkValidation, baseController.addSingle);
router.put('/:id', validator.newRecipe, validator.checkValidation, baseController.editSingle);
router.delete('/:id', baseController.deleteSingle);

export default router;
