const nome = prompt("Digite seu nome:");

// document.write('Alguma coisa\n')
// document.write(nome)

document.body.innerHTML = "<h1>Exercicios da aula 13</h1></br>"
document.body.innerHTML += `O seu nome é <b>${nome}.</br></br>`

document.body.innerHTML += `Seu nome tem <b>${nome.length}</b> letras</br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <b>${nome[1]}</b></br>`;
document.body.innerHTML += `Qual o primeiro índice da letra r no seu nome? <b>${nome.indexOf('r')}</b></br>`;
document.body.innerHTML += `Qual o último índice da letra r no seu nome? <b>${nome.lastIndexOf('r')}</b></br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>${nome.substring(nome.length,nome.length-3)}</b></br>`;
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.slice(' ')}</b></br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <b>${nome.toUpperCase()}</b></br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nome.toLowerCase()}</b></br>`;