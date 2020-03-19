class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.hendleSubmit(e);
        });
    }

    hendleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checkFields();
        const senhasValidas = this.chackPassword();


        if (camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        } else {
            console.log('Formulário não enviado');
        }
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            if (!campo.value) {
                const label = campo.previousElementSibling.innerText;
                valid = false;
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) {
                    valid = false;
                }
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) {
                    valid = false;
                }
            }
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caractéres.');
            valid = false;
        }
        if (!usuario.match(/[a-zA-Z0-9]/g)) {
            this.criaErro(campo, 'Nome de usuário precisa ter somente números ou letras.');
            valid = false;
        }
        return valid;
    }

    chackPassword() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirsenha = this.formulario.querySelector('.rpsenha');

        if (senha.value !== repetirsenha.value) {
            valid = false;
            this.criaErro(senha, "Senhas não correspondem.");
            this.criaErro(repetirsenha, "Senhas não correspondem.");
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, "Senha precisa ter entre 6 e 12 caractéres.");
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();