function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    let contador = 0

    const criaPessoa = (nome, sobrenome, peso, altura) => {
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    };

    function recebeEventoForm(evento) {
        evento.preventDefault();


        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push(
            criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));

        console.log(`${pessoas[contador].nome} ${pessoas[contador].sobrenome}, ${pessoas[contador].peso} Kg , ${pessoas[contador].altura} metros`);


        resultado.innerHTML += `<p>Nome: <b>${pessoas[contador].nome}</b></p>`;
        resultado.innerHTML += `<p>Sobrenome: <b>${pessoas[contador].sobrenome}</b></p>`;
        resultado.innerHTML += `<p>Peso: <b>${pessoas[contador].peso}</b> Kg</p>`;
        resultado.innerHTML += `<p>Altura: <b>${pessoas[contador].altura}</b> metros</p>`;
        resultado.innerHTML += '<p>_________________________________________________________________________</p>';
        ++contador;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();