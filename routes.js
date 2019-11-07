const express = require('express');

const routes = express.Router();

const UserController = require("./src/controllers/UserController");

//post: guardar, get: pegar, put:alterar, delete:excluir

routes.post('/User',UserController.store);

routes.get('/User', UserController.list);

routes.get('/UserId/:id',UserController.index)

routes.put('/UserId/:id',UserController.update);

routes.delete('/UserId/:id',UserController.destroy);

module.exports = routes;

