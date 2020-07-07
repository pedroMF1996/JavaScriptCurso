const express = require('express');
const route = express.Router();
const homeController = require('./SRC/controllers/homeController');
const contatoController = require('./SRC/controllers/contatoController');
//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/',homeController.trataPost);

//rotas de contato
route.get('/contato',contatoController.paginaInicial);
module.exports = route;