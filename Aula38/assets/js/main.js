const paragrafos = document.querySelector(".paragrafos");

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);
let contador = 0;
for (let p of ps) {
    p.style.backgroundColor = (contador % 2 === 0) ? backgroundColorBody : "#FFF";
    p.style.color = (contador % 2 !== 0) ? backgroundColorBody : "#FFF";
    contador++;
}