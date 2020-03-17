//               -5      -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);

//nomes.Splice( qual indice que eu quero começar a mexer(índice), 
//              quantos elementos eu quero remover do meu array(delete),
//              elementos para adicionar(todos separados por virgula));

//pop 
// let removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);

//shift
// removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

//push
// const removidos = nomes.splice(nomes.length, 0, 'Augusto');
// console.log(nomes, removidos);

//unshift
const removidos = nomes.splice(0, 0, 'Augusto');
console.log(nomes, removidos);

// Adicionando valores a partir do indice iteravel
// removidos = nomes.splice(3, 0, 'Augusto', 'Octavius', 'Marrie', 'Schrodinger');
// console.log(nomes, removidos);