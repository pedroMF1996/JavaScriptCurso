import validator from 'validator';

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);

        
    }
    
    init(){
        this.events();
        console.log(this.form);
    }

    events(){
        if(!this.form) return;

        this.form.addEventListener('submit', e=> {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const senhaInput = el.querySelector('input[name="senha"]');
        let error = false;
        
        if(!validator.isEmail(emailInput.value)) {
            error = true;
            alert('Email inválido');
        }

        if(senhaInput.value.length < 3 || senhaInput.value.length <= 50){
            error = true;
            alert('Senha deve ter entre 3 e 50 caracteres.');
        }
        
        if(!error) el.submit();

        console.log(emailInput.value, senhaInput.value);
    }
}