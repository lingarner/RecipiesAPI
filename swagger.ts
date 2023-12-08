const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'Recipe API',
    description: 'Recipe API for Team Project ',
  },
  // servers: [
  //   {
  //       url: "http://localhost:8080/",
  //       description: "Local server"
  //   },
  //   {
  //       url: "https://recipesapi-2dkf.onrender.com",
  //       description: "Live server"
  //   }
  // ],
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.ts'];


swaggerAutogen(outputFile, endpointsFiles, doc);