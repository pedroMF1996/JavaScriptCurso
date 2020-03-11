//Operação ternária
// ? 'valor para verdadeiro': 'valor para falso';

const potuacaoUsuario = 999;
console.log(potuacaoUsuario > 1000 ? 'Usuário VIP' : 'Usuário normal');

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);