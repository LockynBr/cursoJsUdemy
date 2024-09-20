//Podemos também exportar cada coisa, é só colocar o export na frente
export const nome = 'Paulo';
export const sobrenome = 'Henrique';
export const idade = 20;
const cpf = '12345678901';

export function soma(x, y) { //Podemos colocar apenas um default para módulo.
    return x + y;
}

export default (x, y) => x * y;

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

//export { nome, sobrenome, idade, soma };
// Podemos mudar o nome da variável com o 'as'.
//ex: sobrenome as sobrenome2

//Para exportar uma const como default, precisamos renomea-la como default
//export { nome as default, sobrenome, idade, soma };