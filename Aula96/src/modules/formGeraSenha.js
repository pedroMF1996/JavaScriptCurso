import geraSenha from './Geradores';
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGeraSenha.addEventListener('click', () => {
        console.log(chkMaiusculas.checked);
    });
};