class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) this.ligado = true;
    }

    desligar() {
        if (this.ligado) this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //passa parametros para a classe pai 
        this.cor = cor;
        this.modelo = modelo;
    }
};

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy');
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
}