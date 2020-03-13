/*
Declaração de função(Function hoisting)

pode usar antes ou depois de declarar a função


Funções são First Class Objects (objetos de primeira classe)
    pode tratar as funções como dados
    criar a função como um dado 
 */

function falaOi() {
    console.log('Oi');
}

//function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function.');
};

funcaoArrow();

//Dentro de um objeto
const obj = {
    // falar: function() { console.log("Estou falando...") }
    falar: () => console.log("Estou falando...")
}
obj.falar();