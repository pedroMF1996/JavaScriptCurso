const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: {type: String, required:true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  cleanUp(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      senha: this.body.senha
    };

  }
  
  //Validação
  valida(){
    this.cleanUp();

    //O email precisa ser vaildo
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    
    //A senha precisa ter entre 3 e 50 caracteres
    if(this.body.senha.length < 3 || this.body.senha.length >= 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres');
  }

  async userExists(){
    this.user = await LoginModel.findOne({email: this.body.email });
    if(this.user) this.errors.push('Já existe um usuário com este email.');  
  }

  async register(){
    this.valida();
    if(this.errors.length > 0) return;

    await this.userExists();

    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

    this.user = await LoginModel.create(this.body);
  
    console.log(e);
    
  }


  async login(){
    this.valida();
    if(this.errors.length > 0) return;

    this.user = await LoginModel.findOne({email: this.body.email });

    if(!this.user){
      this.errors.push('Usuáio não existe');
      return;
    }

    if(!bcryptjs.compareSync(this.body.senha, this.user.senha)){
      this.errors.push('Senha inválida');
      return;
    }
  }
}

module.exports = Login;
