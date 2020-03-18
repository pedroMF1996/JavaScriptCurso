//difineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave 
        value: estoque, //valor 
        writable: true, //pode alterar o valor 
        configurable: false //pode reconfigurar a chave 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave 
            value: nome, //valor 
            writable: true, //pode alterar o valor 
            configurable: true //pode reconfigurar a chave 
        },
        preco: {
            enumerable: true, //mostra a chave 
            value: preco, //valor 
            writable: true, //pode alterar o valor 
            configurable: true //pode reconfigurar a chave 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));