//Capiturar evento submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#flt_peso');
    const inputAltura = event.target.querySelector('#flt_altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (validacao(peso, altura))
        setResultado(`Seu IMC é de: ${getIMC(peso,altura).toFixed(2)}. (${getNivelIMC(Number(getIMC(peso,altura).toFixed(2)))})`, true);
});

function validacao(peso, altura) {
    if (!peso) {
        setResultado('Peso Inválido', false);
        return false;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return false;
    }
    return true;
}

function setResultado(msg, isValid) {
    const rest = document.querySelector("#resultado");
    rest.innerHTML = '';

    const p = criaParagrafos();
    if (isValid) {
        p.classList.add('paragrafo-resultado-verdadeiro');
    } else {
        p.classList.add('paragrafo-resultado-falso');
    }
    p.innerHTML = `${msg}`;

    rest.appendChild(p);
}

function criaParagrafos() {
    const p = document.createElement('p');
    return p;
}

function getIMC(peso, altura) {
    return peso / (altura ** 2);
}

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}