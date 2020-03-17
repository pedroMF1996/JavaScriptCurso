function* geradora1() {
    //codigo...
    yield 'valor1';
    //codigo...
    yield 'valor2';
    //codigo...
    yield 'valor3';

}

//Não acione essa função contador no for of logo abaixo jamais(mas caso acione pra parar é ctrl + alt + m)
function* contador(max) {
    let i = 0;
    while (true) {
        yield i++;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {
    yield() => {
        console.log('vim do y1');
    };
    yield() => {
        console.log('vim do y2');
    };
}

const g1 = geradora1();
const g2 = contador();


const g4 = geradora4();

const g5 = geradora5();

for (let valor of g5) {
    valor();
}

// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);