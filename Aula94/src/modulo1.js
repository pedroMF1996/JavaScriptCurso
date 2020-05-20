export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;

export function soma(x,y){
    return x + y;
}
export default function multiplica(x,y){
    return x * y;
}

// export {nome as nomeExportado, sobrenome, idade, soma};
export class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    };
    Idade(){
        return `${this.idade} anos`
    }
}