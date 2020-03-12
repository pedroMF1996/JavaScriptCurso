function main() {
    const timerScreen = document.querySelector(".timer");
    let segundos = 0;
    let timer;

    timerScreen.style.fontSize = '3em';


    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            timerScreen.innerHTML = criaHoraDosSegundos(segundos);
            console.log(criaHoraDosSegundos(segundos));
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            iniciaRelogio();
            // timerScreen.style.color = 'rgb(0,0,0)';
            timerScreen.classList.remove('pausado');
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            // timerScreen.style.color = 'rgb(255,0,0)';
            timerScreen.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            segundos = 0;
            clearInterval(timer);
            timerScreen.innerHTML = '00:00:00';
            timerScreen.classList.remove('pausado');
        }

        console.log(el);
    });

    timerScreen.appendChild(document.createTextNode(criaHoraDosSegundos(segundos)));
}



main();