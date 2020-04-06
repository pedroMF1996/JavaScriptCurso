//promises
function aleatorio(min = 0, max = 3) {
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
// esperaAi('Fase 1', aleatorio())
//     .then(msg => {
//         console.log(msg);
//         return esperaAi('Fase 2', aleatorio())
//     })
//     .then(msg => {
//         console.log(msg);
//         return esperaAi('Fase 3', aleatorio())
//     })
//     .then(msg => {
// console.log(msg)
// return msg;
// })
// .then(fase => console.log(`Terminamos na ${fase}`))
//     .catch(error => console.log(error));
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 1', aleatorio());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);
        console.log(`Terminamos na ${fase3}`);
    } catch (e) {
        console.log(e);
    }
}
executa();

//PENDING -> PENDENTE
//FULLFILLED -> RESLVIDA
//REJECTED -> REJEITADA