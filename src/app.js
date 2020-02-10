
const express = require('express');
const cors = require('cors');


// Load process.env variables from dotenv config
require('dotenv').config();
require('./mongo');

const API_GATEWAY_HOST = process.env.API_GATEWAY_HOST;
const API_GATEWAY_PORT = process.env.API_GATEWAY_PORT;

const publicRouterV1 = require('./version/v1/publicRouter');

const app = express();

const corsOption = {
  origin: [`http://${API_GATEWAY_HOST}:${API_GATEWAY_PORT}`],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Allow cookies to be sent
};
app.use(cors(corsOption));


app.use('/tags-api/v1', publicRouterV1);

app.listen(process.env.PORT);


module.exports = app;
