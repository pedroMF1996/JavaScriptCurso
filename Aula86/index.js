//promises
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            // console.log(msg);    
            resolve(msg);
        }, tempo);
    });
}
// Sem promise
// esperaAi('Frase1', aleatorio(1, 7), () => {
//     esperaAi('Frase2', aleatorio(1, 7), () => {
//         esperaAi('Frase3', aleatorio(1, 7), () => {

//         });
//     });
// });

esperaAi('Frase1', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', aleatorio(1, 3)).catch()
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi()
    })
    .then(
        resposta => console.log(resposta)
    )
    .catch(e => {
        console.log('ERRO', e);
    });