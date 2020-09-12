const express = require('express');
const routes = express.Router();

const usercontroller = require('./controllers/usercontroller');

routes.get('/users', usercontroller.index);
routes.post('/users', usercontroller.create);
routes.put('/users/:id', usercontroller.update);
routes.delete('/users/:id', usercontroller.delete);

module.exports = routes;