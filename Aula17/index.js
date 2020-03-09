// function saudacao(nome) {
//     console.log(`Bom dia, ${nome}!!!`)
// }

// saudacao("Pedro")

// function saudacao(nome) {
//     return `Bom dia, ${nome}!!!`
// }

// console.log(saudacao("Pedro"))

function soma(x = 1, y = 1) {
    const resultado = x + y;

    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

console.log(soma(5));

// const raiz = function(n) { return n ** 0.5 ; };
// const raiz = (n) => { return n ** 0.5; };
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));