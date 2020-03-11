// const frutas = ['Pera', 'Maçã', 'Uva'];

//for in -> lê os indices ou chaves do objeto
// for (const i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

console.log(pessoa.nome);

let chave = 'nome';
console.log(pessoa[chave]);

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}