'use strict';

const Express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const app = module.exports = new Express();
app.use(bodyParser.json());

const dbFactory = require('./lib/db');
const authServiceFactory = require('./lib/authService');
const authControllerFactory = require('./lib/authController');

const db = dbFactory('exapmle-db');
const authService = authServiceFactory(db, 'SHHH!');
const authConttoller = authControllerFactory(authService);

app.post('./login', authcontroller.login);
app.get('/checkToken', authcontroller.checkToken);

app.use(errorHandler());
http.createServer(app).listen(3000, () => {
  console.log('Express server started');
});