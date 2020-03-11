const nomes = ['Luiz', 'Otávio', 'Henrique', 'Gustavo'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log();

for (const i in nomes) {
    console.log(nomes[i]);
}
console.log();
//for or -> mostra o valor direto
//Não conseguimos usar for or com objetos pois eles não são iteráveis
for (const valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto)
});

//for classico: geralmente com iteráveis(array, string)
//for in: Retorna o indice ou chave(array, string, objetos)
//for of: Retorna o valor direto(array, string)