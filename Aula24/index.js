/*
IF 
IFELSE
ELSE

entre 0  - 11 horas: Bom dia
entre 12 - 17 horas: Boa tarde
entre 18 - 23 horas: Boa noite 
 */

const hora = 10;
if (hora <= 11) {
    console.log("Bom dia");
} else if (hora > 11 || hora < 18) {
    console.log("Bom tarde");
} else {
    console.log("Bom noite");
};