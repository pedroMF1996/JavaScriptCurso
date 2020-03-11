function mostraDia(dia) {
    // switch (dia) {
    //     case 0:
    //         return 'Domingo';
    //     case 1:
    //         return 'Segunda-Feira';
    //     case 2:
    //         return 'Terça-Feira';
    //     case 3:
    //         return 'Quarta-Feira';
    //     case 4:
    //         return 'Quinta-Feira';
    //     case 5:
    //         return 'Sexta-Feira';
    //     case 6:
    //         return 'Sábado';
    //     default:
    //         return 'data inválida'
    // };

    const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diaSemana[dia];
}

function mostraMes(mes) {
    // switch (mes) {
    //     case 0:
    //         return 'Janeiro';
    //     case 1:
    //         return 'Fevereiro';
    //     case 2:
    //         return 'Março';
    //     case 3:
    //         return 'Abril';
    //     case 4:
    //         return 'Maio';
    //     case 5:
    //         return 'Junho';
    //     case 6:
    //         return 'Julho';
    //     case 7:
    //         return 'Agosto';
    //     case 8:
    //         return 'Setembro';
    //     case 9:
    //         return 'Outubro';
    //     case 10:
    //         return 'Novembro';
    //     case 11:
    //         return 'Dezembro';
    //     default:
    //         return 'mês inválido';
    // }

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[mes];
}

function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

function montaResposta(dia, diaMes, mes, ano, hora, minuto) {
    return `${mostraDia(dia)}, ${diaMes} de ${mostraMes(mes)} de ${ano} </br> ${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}`;
}

function pegaH1() {
    const h1 = document.querySelector(".container h1");
    return h1;
}

function main() {
    const data = new Date();
    const h1 = pegaH1();
    const resposta = montaResposta(data.getDay(), data.getDate(), data.getMonth(), data.getFullYear(), data.getHours(), data.getMinutes());

    h1.innerHTML = resposta;

    // h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
    console.log(resposta);
}

main();