const express = require('express');
const route = express.Router();
const homeController = require('./SRC/controllers/homeController');
const contatoController = require('./SRC/controllers/contatoController');

function meuMiddleware(req,res, next){
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();
}

//rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/',homeController.trataPost);

//rotas de contato
route.get('/contato',contatoController.paginaInicial);
module.exports = route;