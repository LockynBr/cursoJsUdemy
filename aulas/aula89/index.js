// const pessoa = {
//     nome: 'Paulo',
//     sobrenome: 'Henrique'
// }

// Podemos usar dessas duas formas.
const chave = 'nome'
console.log(pessoa[chave]);

//console.log(pessoa['nome']);

console.log(pessoa.sobrenome);

// Podemos criar um objeto utilizando o new object()
const pessoa1 = new Object();
pessoa1.nome = 'Paulo';
pessoa1.sobrenome = 'Henrique';
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

