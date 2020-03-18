//defineProperties -> getters setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave 
        configurable: false, //pode reconfigurar a chave 
        get: () => estoquePrivado,
        set: (valor) => { if (!Number.isNaN(valor)) estoquePrivado = valor; }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);