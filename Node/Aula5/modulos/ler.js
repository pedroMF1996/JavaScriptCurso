const fs = require('fs').promises;

exports.ler = (caminho) => fs.readFile(caminho,'utf-8');
