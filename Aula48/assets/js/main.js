function main() {
    const btnTarefa = document.querySelector('.btn-tarefa');
    const inputTarefa = document.querySelector('.input-tarefa');
    const tarefas = document.querySelector('.tarefas');

    adicionaTarefasSalvas();

    function criaLi() {
        return document.createElement('li');
    }

    inputTarefa.addEventListener('keypress', (e) => {
        if (e.keyCode !== 13) return;
        const valorInput = inputTarefa.value;
        criaTarefa(valorInput);
        limpaInput();
    });

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaBtnApagar(li) {
        li.innerText += ' '
        const btnApagar = document.createElement('button');
        btnApagar.appendChild(document.createTextNode('Apagar'));
        // btnApagar.classList.add('');

        btnApagar.setAttribute('class', 'apagar');
        li.appendChild(btnApagar);
    }

    function criaTarefa(texto) {
        console.log(texto);
        const li = criaLi();

        li.appendChild(document.createTextNode(texto));
        criaBtnApagar(li);
        tarefas.appendChild(li);
        salvarTarefa();
    }

    function salvarTarefa() {
        const li = tarefas.querySelectorAll('li');
        const listaTarefas = [];
        for (let tarefa of li) {
            listaTarefas.push(tarefa.innerText.replace('Apagar', '').trim());
        }
        const tarefasJSON = JSON.stringify(listaTarefas); //converte um objeto js para uma string no formato JSON
        console.log(tarefasJSON);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const arrayTarefas = JSON.parse(tarefas); //converte um  uma string no formato JSON para um objeto js

        for (let tarefa of arrayTarefas) {
            criaTarefa(tarefa);
        }

    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('apagar')) {
            e.target.parentElement.remove();
            salvarTarefa();
        } else if (e.target.classList.contains('btn-tarefa')) {
            const valorInput = inputTarefa.value;
            if (!valorInput) return;
            criaTarefa(valorInput);
            limpaInput();
        }
    });
}

main();