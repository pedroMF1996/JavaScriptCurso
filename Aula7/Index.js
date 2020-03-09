//Constantes

//Não podemos criar constantes com palavras reservadas.
//Constantes precisam  ter nomes significativos.
//NÃO DEVE COMECAR UMA CONSTANTES COM NUMERO.
//não deve conter espaços ou traços.
//Utilizamos camelCase.
//Case-Sensitive.
//Não podemos modificar o valor de constantes.
//NÃO UTILIZE VAR, NEM LET, UTILIZE CONST.
const nome = "João"
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2

let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5

console.log(typeof resultadoTriplicado)