//factory function
//constructor function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        //setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        FALA(assunto = 'Falando sobre NADA') {
            return `${this.nome} está ${assunto}`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';

console.log(p1.FALA('falando sobre JS'));
console.log(p1.imc);