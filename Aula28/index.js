// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras);
// console.log(data.toString());

// const data = new Date(2019, 3, 20, 15, 14, 27, 500); //a, m, d, h, m, s, ms

const data = new Date('2019-04-20 20:20:59');

console.log('Dia ', data.getDate());
console.log('Mes ', data.getMonth() + 1); //começa do 0
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Minuto ', data.getMinutes());
console.log('Segundo ', data.getSeconds());
console.log('Milésimo de segundo ', data.getMilliseconds());
console.log('Dia da semana ', data.getDay()); //0 é domingo e 6 é sábado

console.log(data.toString());

console.log(Date.now());

function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

const exibeData = (data) => {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}