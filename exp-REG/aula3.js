const {texto, arquivos} = require('./base');

/** (opcionais) 0 ou n
 * + (obrigatório) 1 ou n
 * ? (opcionais) 0 ou 1
 * \ caractere de escape
 * {n,m} n quantidade minima de aparições m quentidade maximade aparições
 * {10,} no mínimo 10
 */

//  const regExp = /Jo+ão+/gi
//  console.log(texto.match(regExp));

const regExp2 = /\.((jp|JP)(e|E)*(g|G)|png)/g

for(const arquivo of arquivos){
    const valido = arquivo.match(regExp2);
    if(!valido) continue;
    console.log(arquivo, valido);
}