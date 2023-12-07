const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('./db/connection.js');
const port = process.env.PORT || 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();
const cors = require('cors');


// Auth0 authentication process
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: 'https://recipesapi-2dkf.onrender.com',
  clientID: '33WXz5xVS0de9dJmZjRrJLFPyZXVlFlh',
  issuerBaseURL: 'https://dev-4ha050c0hqua8uiq.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

const checkAuth = (req, res, next) => {
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).send('Unauthorized. Please log in');
  }
  next()
  // res.send(JSON.stringify(req.oidc.user));
}


app.use('/api-docs', checkAuth, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })


app.use('/', require('./routes'))
app.use(cors());

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });

