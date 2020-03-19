// //getters e setters em classes
// const _velocidade = Symbol('velocidade');

// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[_velocidade] = 0;
//         this.limite = 100;
//     }
//     acelerar() {
//         if (this[_velocidade] < this.limite) this[_velocidade]++;
//     }
//     freiar() {
//         if (this[_velocidade] !== 0) this[_velocidade]--;
//     }

//     get velocidade() { return this[_velocidade]; }
//     set velocidade(valor) { if (valor <= this.limite && valor >= 0) this[_velocidade] = valor; }
// }

// const c1 = new Carro('Fusca');

// for (let index = 0; index < 55; index++) {
//     c1.acelerar();
// }

// c1.velocidade = 2000;

// console.log(c1.velocidade);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranha');
p1.nomeCompleto = 'Luiz Miranha Oliveira';
console.log(p1.nome, p1.sobrenome);