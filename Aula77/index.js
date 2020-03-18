/*
    705.484.450-52      070.987.720-03



    7x    0x    5x    4x    8x    4x    4x    5x    0x
    10    9     8     7     6     5     4     3     2
    70  + 0   + 40  + 28  + 48  + 20  + 16  + 15 +  0 = 237

    11 - (237 % 11) = 5 (Primeiro digito)

    Se o digito for maior que 9, consideraremos ele sendo 0
    
    7x    0x    5x    4x    8x    4x    4x    5x    0x    5x
    11   10     9     8     7     6     5     4     3     2
    77  + 0   + 45  + 32  + 56  + 24  + 20  + 20  + 0  + 10 = 284
    
    11 - (284 % 11) = 2 (Primeiro digito)
    */

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.remontaCPF = function(cpf) {
    const seq = cpf.length + 1;

    let primeiraSoma = cpf.reduce((ac, val, ind) => {
        ac += val * (seq - ind);
        return ac;
    }, 0);

    const digito = (11 - (primeiraSoma % 11));
    cpf.splice(cpf.length, 0, String(digito > 9 ? 0 : digito));

    if (seq < 11) this.remontaCPF(cpf);

    return cpf;
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

ValidaCPF.prototype.checaValores = function(cpfLimpo, cpfRemontado) {
    let i = 0;
    while (i < cpfRemontado.length) {
        if (cpfRemontado[i] !== cpfLimpo[i]) return false;
        ++i;
    }
    return true;
}

ValidaCPF.prototype.validaCPF = function() {
    if (this.isSequencia()) return false;

    let cpfLimpo = Array.from(this.cpfLimpo);
    let cpfParcial = cpfLimpo.slice(0, -2);


    const cpfRemontado = this.remontaCPF(cpfParcial);

    console.log(cpfLimpo, cpfRemontado);

    return this.checaValores(cpfLimpo, cpfRemontado);
}

const v1 = new ValidaCPF('705.484.450-52');
const v2 = new ValidaCPF('070.987.720-03');
const v3 = new ValidaCPF('111.111.111-11');
console.log(v1.validaCPF() ? 'É um CPF válido' : 'Não é um CPF válido');
console.log(v2.validaCPF() ? 'É um CPF válido' : 'Não é um CPF válido');
console.log(v3.validaCPF() ? 'É um CPF válido' : 'Não é um CPF válido');

console.log(v1.remontaCPF(Array.from('475608418')).join().replace(/\D+/g, ''));