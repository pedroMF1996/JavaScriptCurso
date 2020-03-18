//Produto -> aumento/desconto
//Camiseta = Cor, caneca = maerial, lápis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) { this.preco += quantia; };
Produto.prototype.desonto = function(quantia) { this.preco -= quantia; };

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco += (this.preco * (percentual / 100));
}


const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);


function Caneca(nome, preco, maerial) {
    Produto.call(this, nome, preco);
    this.maerial = maerial;
    let estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => estoque,
        set: (value) => { if (!Number.isNaN(value)) estoque = value; }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plástico', 5);