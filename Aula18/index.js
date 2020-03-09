//Objetos

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

const criaPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade,

        falaNome() {
            return `Meu nome é ${this.nome} ${this.sobrenome}`
        },

        incrementaIdade() {
            this.idade++;
        },

        falaIdade() {
            return `Minha idade é ${this.idade}`
        }
    };
};

console.log(criaPessoa("Luiz", "Miranda", 25).falaNome());
console.log(criaPessoa("Maria", "Oliveira", 32).falaNome());
console.log(criaPessoa("João", "Moreira", 55).falaNome());
console.log(criaPessoa("Junior", "Lara", 44).falaNome());
console.log(criaPessoa("Jean", "Otávio", 69).falaNome());

console.log(criaPessoa("Luiz", "Miranda", 25).incrementaIdade().falaIdade());
console.log(criaPessoa("Maria", "Oliveira", 32).incrementaIdade().falaIdade());
console.log(criaPessoa("João", "Moreira", 55).incrementaIdade().falaIdade());
console.log(criaPessoa("Junior", "Lara", 44).incrementaIdade().falaIdade());
console.log(criaPessoa("Jean", "Otávio", 69).incrementaIdade().falaIdade());