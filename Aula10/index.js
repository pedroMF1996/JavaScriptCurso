/*
Aritiméticos
+ Adição / Concatenação (- / *)
** Potenciação
% Resto da divisão
 */

/*
precedencia

()

**

* / %

+ -
 
*/
const num1 = 5
const num2 = 2
const num3 = 10

console.log(num1 * num2 / num3)

let contador = 1
    ++contador //primeiro faz a soma e depois mostra o valor(ou executa a ação em questão)
contador++ //Faz a ação em questão, mostrar o valor e depois faz a soma

--contador //primeiro faz a subtração e depois mostra o valor(ou executa a ação em questão)
contador-- //Faz a ação em questão, mostrar o valor e depois faz a subtração

/*
Operadores
Incremento ++
Decremento --

De atribuição
**=
*=
-=
+=
/= 

*/

contador += 2
console.log(contador)

contador -= 2
console.log(contador)

contador *= 2
console.log(contador)

contador /= 2
console.log(contador)

contador **= 2
console.log(contador)


const cnum1 = 10
const cnum2 = parseInt('5.2')
const cnum3 = parseFloat('5.2')
const cnum4 = Number('5.2')
console.log(cnum2)
console.log(cnum3)
console.log(cnum4)