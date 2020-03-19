//superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (typeof valor === 'number' && (this.saldo - valor) >= 0) {
        this.saldo -= valor;
        this.verSaldo();
    } else {
        console.log(`impossível sacar essa quantia, saldo atual R$ ${this.saldo.toFixed(2)}`);
    }
};
Conta.prototype.depositar = function(valor) {
    if (typeof valor === 'number' && valor > 0) this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} - ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`);
};

// const conta = new Conta(11, 22, 10);
// console.log(conta);

// conta.depositar(11);
// conta.depositar(10);
// console.log(conta.sacar(30));
// console.log(conta.sacar(30));
// console.log(conta);

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    Object.defineProperty(this, 'limite', {
        writable: true,
        configurable: false,
        enumerable: true,
        value: limite
    });
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


CC.prototype.sacar = function(valor) {
    if (typeof valor === 'number' && (this.saldo - valor) >= 0 - this.limite) {
        this.saldo -= valor;
        this.verSaldo();
    } else {
        return `impossível sacar essa quantia, saldo atual R$ ${this.saldo.toFixed(2)}`
    }
};

const cc = new CC(11, 11, 0, 100);

// cc.depositar(10);
// cc.sacar(100);

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);