import express, { Router } from 'express';
import breakfast from './breakfast';
import lunch from './lunch';
import dinner from './dinner';
import dessert from './dessert';
import swagger from './swag';

const routes: Router = Router()

routes.use('/', swagger);

routes.use('/breakfast', breakfast);
routes.use('/lunch', lunch);
routes.use('/dinner', dinner);
routes.use('/dessert', dessert);

export default routes;
