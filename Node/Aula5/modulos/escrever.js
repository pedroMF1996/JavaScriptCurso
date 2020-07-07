const fs = require('fs').promises;


exports.escreve = function(caminhoArquivo, json){
    fs.writeFile(caminhoArquivo, json, {flag:'w'});
}
