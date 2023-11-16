const routes = require('express').Router();
const breakfast = require('./breakfast');
// const lunch = require('./lunch');
// const dinner = require('./dinner');
const dessert = require('./dessert');
// const swagger = require('./swagger.js');


//routes.get('/', (req,res) => {
//    res.send(req.oidc.isAuthenticated() ? 'Welcome Logged in' : 'Welcome Logged out')
//});

routes.use('/breakfast', breakfast);
routes.use('/dessert', dessert);
// routes.use('/lunch', lunch);
// routes.use('/dinner', dinner);
// routes.use('/', swagger);

module.exports = routes;