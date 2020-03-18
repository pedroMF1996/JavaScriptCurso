//Objeto - revisão
//objeto literal
// const obj = {};

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// const pessoa = new Object({
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// });

// const pessoa = new Object();
// pessoa.nome = 'Luiz';
// pessoa.sobrenome = 'Otávio';
// pessoa.idade = 30;
// pessoa.falarNome = function() { console.log(`${this.nome} ${this.sobrenome}`); };
// pessoa.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// delete pessoa.nome;
// console.log(pessoa);
// console.log(pessoa.nome, pessoa.sobrenome); //forma intuitiva
// console.log(pessoa['nome'], pessoa['sobrenome']); //forma dinamica

// pessoa.falarNome();

// console.log(pessoa.getDataNascimento());

// for (const key in pessoa) {
//     console.log(pessoa[key]);
// }

//factory function
function constroePessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = constroePessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);

//constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Trava as alterações dess objeto
    Object.freeze(this);
}

// {} <- this -> this
const p2 = new Pessoa('Luiz', 'Miranha');
console.log(p2);

//Classe