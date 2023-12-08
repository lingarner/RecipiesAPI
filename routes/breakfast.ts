// your router file

import express, { Router } from 'express';
import * as baseController from '../controllers/baseController';

const router: Router = express.Router();

router.get('/:id', baseController.getSingle);
router.get('/', baseController.getAll);
router.post('/', baseController.addSingle);
router.put('/:id', baseController.editSingle);
router.delete('/:id', baseController.deleteSingle);

export default router;
