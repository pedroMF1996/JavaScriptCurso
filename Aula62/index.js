//Valor por referencia

// const nomes = ['eduardo', 'maria', 'joana'];

//strings, objetos, funções, números
// const nomes = new Array('eduardo', 'maria', 'joana')

// spread operator(espalhamento)
// const novo = [...nomes];

// const novo = nomes;

// const removidoFim = novo.pop();

// const removidoComeco = nomes.shift();

// nomes.unshift('João'); //Adiciona no inicio 
// nomes.push('Wallace'); //Adiciona no fim


// const novo = nomes.slice(0, -1);

// nomes[2] = 'João';
// delete nomes[2];
// console.log(removidoComeco);
// console.log(nomes);

// console.log(removidoFim);
// console.log(novo);

// console.log(nomes.length);


// const nome = 'Luiz Otávio Miranda';

// const nomes = nome.split(' ');
const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' '); //Faz o contrário do split, porém com o "mesmo" parâmetro
console.log(nome);