//1
//2
//3
// import {nome as nomeImportado, sobrenome, idade, soma, Pessoa} from './modulo1';
// import * as meuModulo from './modulo1';

// console.log(meuModulo);

// const p1 = new meuModulo.Pessoa(meuModulo.nome, meuModulo.sobrenome,meuModulo.idade)

// alert(`${p1.nomeCompleto()} tem ${p1.Idade()}.`);
// alert(meuModulo.soma(5,5));

// console.log(p1);

import multp,{nome, sobrenome, idade, soma, Pessoa} from './modulo1';
alert(multp(2,5));
alert(soma(2,5));

const p1 = new Pessoa(nome, sobrenome, idade)
alert(`${p1.nomeCompleto()} tem ${p1.Idade()}.`);
