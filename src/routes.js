const express = require('express');
const routes = express.Router();

const usercontroller = require('./controllers/usercontroller');

routes.get('/users', usercontroller.index);

module.exports = routes;