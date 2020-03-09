const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg')
console.log('tem ' + alturaEmCm + ' e seu ICM é de ' + (peso / (alturaEmCm * alturaEmCm)))
console.log('Naceu em ' + (2020 - idade))

//template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmCm} e seu ICM é de ${(peso / (alturaEmCm * alturaEmCm))}`)
console.log(`Naceu em ${(2020 - idade)}}`)