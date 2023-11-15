const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('./db/connection.js');
const port = process.env.PORT || 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();
const cors = require('cors');
// const { auth: auth2 } = require("express-openid-connect");

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASEURL,
//   clientID: process.env.CLIENTID,
//   issuerBaseURL: process.env.ISSUER,
// };
// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth2(config));
// ////////// The end of new lines

// const checkAuth = (req, res, next) => {
//   if (!req.oidc.isAuthenticated()) {
//     return res.status(401).send('Unauthorized. Please log in');
//   }
//   next()
//   // res.send(JSON.stringify(req.oidc.user));
// }

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json())
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

