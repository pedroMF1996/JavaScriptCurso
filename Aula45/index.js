// try {
//     //é executado quando não há erro
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo');
//     console.log('Fechei o arquivo');
// } catch (err) {
//     //é executado quando há erro
//     console.log('Tratando erro');
// } finally {
//     //é executado sempre
//     console.log('Sempre serei executado');
// }

const retornaHora = (data) => {
    if (data && !(data instanceof Date)) throw new TypeError("Esperando instância de Date");
    if (!data) data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    // console.log(retornaHora());
    // console.log(retornaHora(11));
    console.log(retornaHora(new Date('01-01-1970 12:58:12')));
} catch (error) {
    console.log(error);
}