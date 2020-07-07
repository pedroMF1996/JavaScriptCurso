const path = require('path');
const escrever = require('./modulos/escrever').escreve;
const caminhoArquivo = path.resolve(__dirname,'teste.txt');
const ler = require('./modulos/ler').ler;
const pessoas = [
    {nome:'João'},
    {nome:'Maria'},
    {nome:'Luiza'}
];

const json = JSON.stringify(pessoas,'',2);

escrever(caminhoArquivo, json);

async function lerArquivo(caminho){
    const dadosArquivo = await ler(caminho);
    return dadosArquivo;
}

const dados = lerArquivo(caminhoArquivo)
                .then(dados => console.log(JSON.parse(dados)));
