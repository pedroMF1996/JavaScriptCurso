const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const sectionMjor = document.querySelector('.container');

const divMjor = document.createElement('div');

for (let index = 0; index < elementos.length; index++) {
    const { tag, texto } = elementos[index];
    const elemento = document.createElement(tag);
    // elemento.innerText = texto;
    elemento.appendChild(document.createTextNode(texto));

    divMjor.appendChild(elemento);
}

sectionMjor.appendChild(divMjor);