/*
Primitivos(imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
Valores copiados
Referencia(mutável) - array, objects, function
Valores passados por referencias
*/

let a = [1, 2, 3];
let b = [...a]; //spretch do array A dentro de B

console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Luiz')
console.log(a, b)


const c = { nome: 'Luiz', sobrenome: 'Otavio' }
let d;

d = {...c }
    // d = c
d.nome = 'João'

console.log(d.nome, c.nome)