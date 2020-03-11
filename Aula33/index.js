const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
};
//Atribuição por desestruturação
const {
    nome: teste = 'Não Existe',
    sobrenome,
    idade,
    endereco: {
        rua: r = 'Rua não encontrada',
        numero
    },
    endereco
} = pessoa;


console.log(teste, sobrenome, idade, r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(resto);