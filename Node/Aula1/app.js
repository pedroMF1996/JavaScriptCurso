const {Pessoa} = require('./mod1');
const path = require('path');
const axios = require('axios');
const p1 = new Pessoa('Luiz');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

