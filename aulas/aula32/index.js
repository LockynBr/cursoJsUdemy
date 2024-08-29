/* 
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; //Quando temos uma variável com o mesmo nome do objeto, não é preciso colocar os dois pontos.
}

const pessoa1 = criaPessoa('Paulo', 'Henrique', 20);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 20);
const pessoa3 = criaPessoa('João', 'Moreira', 20);
const pessoa4 = criaPessoa('Junior', 'Laravel', 20);
const pessoa5 = criaPessoa('Jean', 'Otávio', 20);

console.log(pessoa1.nome, pessoa2.nome)
*/

const pessoa1 = {
    nome: 'Paulo', //Atributos
    sobrenome: 'Henrique',
    idade: 20,

    fala() { //Método
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();