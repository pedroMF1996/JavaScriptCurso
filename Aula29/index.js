const getDiaTexto = (dataDia) => {
    switch (dataDia) {
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        case 0:
            return 'Domingo';
        default:
            return 'Dia inválido';
    }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;


diaSemanaTexto = getDiaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);