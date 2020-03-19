//classe

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('Luiz', 'Miranha');
console.log(p1);

const p2 = new Pessoa2('Luiz', 'Miranha');
console.log(p2);