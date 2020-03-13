//argumntos que sustenta todos os argumentos enviados
// function funcao({ nome, sobrenome, idade }) {
// let total = 0;
// for (let argumento of arguments) {
//     total += argumento;
// }
// console.log(total);

// console.log(a, b, c, d, e, f);

//     console.log(nome, sobrenome, idade);
// }

// funcao(1);
// funcao(2, 10);
// funcao(2, 10, 20);
// funcao(2, undefined, 20);

// funcao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('*', 1, 20, 30, 40, 50);