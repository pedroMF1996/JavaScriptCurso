//validação de CPF usando classes
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCPF() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigito);
        const digito2 = this.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    geraDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for (const stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) {
            console.log('Não foi possivel gerar o cpfLimpo')
            return false;
        }
        if (typeof this.cpfLimpo !== 'string') {
            console.log('Tipo imncompativel');
            return false;
        }
        if (this.cpfLimpo.length !== 11) {
            console.log('cpfLimpo.length diferente de 11');
            return false;
        }
        if (this.eSequencia()) {
            console.log('É sequencia');
            return false;
        }

        this.geraNovoCPF();
        console.log(this.novoCpf);
        return this.cpfLimpo === this.novoCpf;
    }
}

const validaCPF = new ValidaCPF('070.987.720-03');

console.log(validaCPF.valida());