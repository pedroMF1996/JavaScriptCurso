function Calculadora() {
    this.display = document.querySelector('.display');
    this.Inicia = () => {
        this.capituraCliques();
        this.capituraEnter();
    };

    this.capituraEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.realizaConta();
        });
    };

    this.capituraCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumeroDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    this.addNumeroDisplay = valor => {
        this.display.value += valor;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.Inicia();