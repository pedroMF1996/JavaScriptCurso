// //mais diferenças entre var e let/const

// const verdadeira = true;

// //let tem escopo de bloco {... bloco ...}
// //var só tem escopo de função

// let nome = 'Luiz'; //criando
// var nome2 = 'Luiz'; //criando

// var nome2 = 'Otávio';

// if (verdadeira) {
//     let nome = 'Otávio'; //criando   
//     var nome2 = 'Augusto'; //redeclarada
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Outra coisa'; //criando   
//         var nome2 = 'Outra coisa'; //redeclarada   
//         console.log(nome, nome2);
//     }
// }
// console.log(nome, nome2); //prova real


function falaOi() {
    let nome = 'Luiz'; //criando
    console.log('Oi');
}

falaOi();