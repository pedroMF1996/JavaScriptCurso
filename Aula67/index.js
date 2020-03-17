//Reduce parametros (acumulador, valor, indice, array)
//Some todos os números
//Retorne um array com os pares
//Retorne um array com o dobro dos valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

const pares = numeros.reduce((acumulador, valor) => {
    // if (valor % 2 === 0) acumulador.push(valor);
    if (valor % 2 === 0) acumulador.splice(acumulador.length, 0, valor);
    return acumulador
}, []);
console.log(pares);

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    // acumulador.splice(acumulador.length, 0, valor * 2);
    return acumulador
}, []);
console.log(dobro);

/*
Retorne a maior idade
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];

const maisVelha = pessoas.reduce((acumulador, valor) => (acumulador.idade < valor.idade) ? valor : acumulador, { nome: 'inicial', idade: 0 });
console.log(maisVelha);