//Map -> altera valores do array


//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log('Números em dobro ', numeros.map(valor => `${valor} dobrado fica -> ${valor * 2}`));



/*
Para cada elemento:
    Retorne apenas uma string com o nome da pessoa
    Retorne apenas a chave "nome" do objeto
    Adicione uma chave id para cada objeto
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

console.log(`Nomes: ${pessoas.map(pessoa => pessoa.nome) }`);
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
});

console.log(comIds);