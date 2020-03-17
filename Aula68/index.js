//filter + map + reduce
/**
 * Filtrar pares
 * Dobrar os valores
 * Reduzir(somar tudo)
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const totalDaSomDosPares = numeros
    .filter(x => x % 2 === 0)
    .map(x => x * 2)
    .reduce((a, x) => a + x, 0);

console.log(totalDaSomDosPares);