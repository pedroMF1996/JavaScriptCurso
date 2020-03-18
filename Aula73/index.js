/*
Objects.values
Objects.entries
Objects.getOwnPropertyDescriptor(obj, 'prop')
Objects.assign(des, any) (copia objetos)
...(spread)

//Já vimos
Objects.keys (retorna as chaves)
Objects.freeze (consgela o objeto)
Objects.defineProperty (define uma propriedade)
Objects.dfineProperties (define várias propriedades)
 */

const produto = { nome: 'Produto', preco: 1.8 };
// Object.freeze(produto);
// const caneca = {...produto, material: 'porcelana' };
// const caneca = Object.assign({}, produto, { material: 'porcelana' });
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.keys(produto));
console.log(produto);
console.log(Object.entries(produto)); //retorna a chave e o valor 

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}