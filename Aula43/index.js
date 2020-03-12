/*
Escreva uma função que recebe um número e
retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisivel por 3 e 5 = retorna o proprio número
checa se o número é realmente um número
Use a função com números de 0 a 100
 */

const FizzBuzz = (num) => typeof num === 'number' ? (num % 3 === 0 ? (num % 5 === 0 ? `${num}, FizzBuzz` : `${num}, Fizz`) : (num % 5 === 0 ? `${num}, Buzz` : num)) : 'Não é um número';

let i = 0;
do {
    console.log(`Teste com o número ${i}: ${FizzBuzz(i)}`);
    i++;
} while (i < 101);

console.log(FizzBuzz('x'));