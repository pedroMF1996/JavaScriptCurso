//Escreva uma função que recebe 2 números e retorne o maior entre eles

const Emaior = (x, y) => x > y ? `${x} é maior` : (x === y ? `${x} e ${y} são iguals` : `${y} é maior`);

let [x, y] = [10, 20];

console.log(`Entre ${x} e ${y}: ${Emaior(x,y)}`);