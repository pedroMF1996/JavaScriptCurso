const rand = (min, max) => Math.floor(Math.random()*(max-min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumeros = () => String.fromCharCode(rand(48,58));
const simbolos = `',.;:<>{}[]()_-+=§*&¨¬%¢$£#³@²!¹"`;
const geraSimbolo = () => simbolos[rand(0,simbolos.length)];


export default geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i< qtd; i++){
        (maiusculas && senhaArray.length < qtd) && senhaArray.push(geraMaiuscula());
        (minusculas && senhaArray.length < qtd) && senhaArray.push(geraMinuscula());
        (numeros && senhaArray.length < qtd) && senhaArray.push(geraNumeros());
        (simbolos && senhaArray.length < qtd) && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('');

}
console.log(geraSenha(5,true,false,false,true));