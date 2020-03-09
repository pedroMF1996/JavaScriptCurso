const titulo = document.getElementById("numero-titulo")

let num = Number(prompt("Digite um número: "))
titulo.innerHTML = num;

document.body.innerHTML += `<p>Raiz quadrada: <b>${num ** 0.5}</b></p>`
document.body.innerHTML += `<p><b>${num}</b> é inteiro ? <b>${Number.isInteger(num)}</b></p>`
document.body.innerHTML += `<p>É NaN? <b>${Number.isNaN(num)}</b></p>`
document.body.innerHTML += `<p>Arredondando pra baixo: <b>${Math.floor(num)}</b></p>`
document.body.innerHTML += `<p>Arredondando pra cima: <b>${Math.ceil(num)}</b></p>`
document.body.innerHTML += `<p>Com duas casas decimais: <b>${num.toFixed(2)}</b></p>`