//filter -> Sempre retorna um array, 
// com a mesma uantidade de elementos ou menos

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10;
// }
// const numerosMaioresQue10 = numeros.filter(callbackFilter);

// const numerosMaioresQue10 = numeros.filter(function(valor) {
//     return valor > 10;
// });

// const numerosMaioresQue10 = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });

const numerosMaioresQue10 = numeros.filter(x => x > 10);
console.log(numerosMaioresQue10);

/*
    Retorne as pessoas que tem o nome com 5 letras ou mais
    Retorne as pessoas com mais de 50 anos 
    Retorne as pessoas cujo nome termina em a
 */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasCom5LetrasNoNome = pessoas.filter(pessoa => pessoa.nome.length > 4);
console.log(pessoasCom5LetrasNoNome);

const pessoasComMaisDe50 = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(pessoasComMaisDe50);

const pessoasCujoNomeTerminaEmA = pessoas.filter(pessoa => pessoa.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasCujoNomeTerminaEmA);