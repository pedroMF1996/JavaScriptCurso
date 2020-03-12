//while - do while
// const nome = 'Luiz';
// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

// console.log('Segue a vida');

function random(min = 1, max = 100) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// let rand = random(1, 50);
// while (rand !== 10) {
//     console.log(rand);
//     rand = random(1, 50);
// }

let rand;
do {
    rand = random();
    console.log(rand);
} while (rand !== 10);

console.log(rand);