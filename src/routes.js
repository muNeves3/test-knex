const express = require('express');
const routes = express.Router();

const usercontroller = require('./controllers/usercontroller');
const projectcontroller = require('./controllers/projectcontroller');

routes
    //Users routes
    .get('/users', usercontroller.index)
    .post('/users', usercontroller.create)
    .put('/users/:id', usercontroller.update)
    .delete('/users/:id', usercontroller.delete)
    //Projects Routes
    .get('/projects', projectcontroller.index)
    .post('/projects', projectcontroller.create)
module.exports = routes;