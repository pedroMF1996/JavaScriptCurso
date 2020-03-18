//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

//instância
const p1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const p2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(p1.nomeCompleto());
console.dir(data);