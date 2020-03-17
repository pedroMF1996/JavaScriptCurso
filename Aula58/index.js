//Função construtora -> objetos
//Função fábrica -> objetos
//Construtora -> Inicia o seu nome, sempre, com letra Maiúscula | Pessoa(new)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('sou um método', this.nome);
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p2.nome);