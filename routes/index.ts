import { Router } from 'express';
import breakfast from './breakfast';
import lunch from './lunch';
import dinner from './dinner';
import dessert from './dessert';
// import swagger from './swagger.js';

const routes: Router = Router();

// routes.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Welcome Logged in' : 'Welcome Logged out');
// });

routes.use('/breakfast', breakfast);
routes.use('/lunch', lunch);
routes.use('/dinner', dinner);
routes.use('/dessert', dessert);
// routes.use('/', swagger);

module.exports = routes;
