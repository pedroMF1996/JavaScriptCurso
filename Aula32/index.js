// //atribuição por desestruturação
// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const numeros = [b, c, a];
// // [a, b, c] = [b, c, a];

// [a, b, c] = numeros;

// console.log(a, b, c);

//   indice      0      1      2    3     4     5     6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// // const primeiroNumero = numeros[0];
// //      0               1
// // const [um, dois, tres, ...resto] = numeros;

// const [um, , tres, , cinco, , sete] = numeros;

// //... rest, ... spread
// console.log(um, tres, cinco);


const numeros = [
    //0  1  2
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9] //2
];
const [, [, , seis]] = numeros;

console.log(numeros[1][2], seis);