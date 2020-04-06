//promises
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }

            // console.log(msg);    
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

/*
Promise.all
Promise.race
Promise.resolve
Promise.reject 
 */

const promises = [
    // 'Primeira promise',
    esperaAi('Promise 1', aleatorio(2, 5)),
    esperaAi('Promise 2', aleatorio(2, 5)),
    esperaAi('Promise 3', aleatorio(2, 5)),
    esperaAi(1000, aleatorio(2, 5)),
    // 'Outro valor'
];

// Promise.all(promises)
//     .then(valor => console.log(valor))
//     .catch(e => console.log(e));

Promise.race(promises)
    .then(valor => console.log(valor))
    .catch(e => console.log(e));

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', aleatorio(2, 5));
    }
}
baixaPagina()
    .then(valor => console.log(valor))
    .catch(erro => console.log(erro));