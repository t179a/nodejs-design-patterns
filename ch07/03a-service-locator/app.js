'use stritct';

const Express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const app = module.exports = new Express();
app.use(bodyParser.json());

const svLoc = require('./lib/serviceLocator')();

svLoc.register('dbName', 'example-db');
svLoc.register('tokenSecret', 'SHHH!');
svLoc.factory('db', require('./lib/db'));
svLoc.factory('authService', require('./lib/authService'));
svLoc.factory('authController', require('./lib/authController'));

const authController = svLoc.get('authController');

app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);

app.use(errorHandler());
http.createServer(app).listen(3000, () => {
  console.log('Express server started');
});
