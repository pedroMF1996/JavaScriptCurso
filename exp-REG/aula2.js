const {texto} = require('./base');

// const expReg = /João|Maria/gi;
const expReg = /(João|Maria)/gi;
// const expReg = /João/gi;

// console.log(texto.match(expReg));
// console.log(texto.replace(expReg, 'Felipe'));
// console.log(texto.replace(expReg, '<b>$1</b>'));
// console.log(texto.replace(expReg, function(input){
//     return input.toUpperCase();
// }));
console.log(texto.replace(expReg, input=> input.toUpperCase() ));