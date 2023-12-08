import express, {Request, Response, NextFunction} from 'express';
import routes from './routes/index';
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('./db/connection.ts');
const port = process.env.PORT || 8080;
require('dotenv').config();
const cors = require('cors');
import swaggerRouter from './routes/swag'; // Change the import

// Auth0 authentication process
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: '33WXz5xVS0de9dJmZjRrJLFPyZXVlFlh',
  issuerBaseURL: 'https://dev-4ha050c0hqua8uiq.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req: any, res: any) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// END AUTH0 PROCESS

const checkAuth = (req: any, res: any, next: any) => {
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).send('Unauthorized. Please log in');
  }
  next()
  // res.send(JSON.stringify(req.oidc.user));
}

app
  .use(cors())// Place cors middleware here
  .use('/api-docs', checkAuth, swaggerRouter) // Change the route path
  .use(bodyParser.json())
  .use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
  })

  .use('/', routes) //to routes index




mongodb.initDb((err: any) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
