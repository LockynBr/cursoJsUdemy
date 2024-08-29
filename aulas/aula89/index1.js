// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Paulo', 'Henrique') 
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //Podemos congelar o this, assim, qualquer coisa que vier depois do freeze não será manipulada, será apenas ignorada. Isso também funciona com arrays.
}

const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1); //Podemos congelar um objeto, sendo assim não é possivel alterado.
p1.nome = 'Outra coisa'; // Podemos trocar o valor de um objeto, pois ele está alocado em uma local na memoria. Quando alteramos, não estamos trocando o local da memoria, mas sim o valor do local da memoria.
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);