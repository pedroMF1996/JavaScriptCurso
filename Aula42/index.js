/*
Escreva uma função chamada ePaisagem que receba dois argumentos, 
largura e altura de uma imagem(number);
Retorne true se a imagem estiver em modo paisagem
 */

const ePaisagem = (largura, altura) => altura < largura;
console.log(ePaisagem(1080, 1920) ? 'Paisagem' : 'Retrato');