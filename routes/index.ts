import express, { Router } from 'express';
import breakfast from './breakfast';
import lunch from './lunch';
import dinner from './dinner';
import dessert from './dessert';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from  '../swagger.json';

const routes: Router = Router();
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


routes.use('/breakfast', breakfast);
routes.use('/lunch', lunch);
routes.use('/dinner', dinner);
routes.use('/dessert', dessert);

module.exports = routes;
