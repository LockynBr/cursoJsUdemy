class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} está falando`;
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    return `${this.nome} está falando`;
}

const p1 = new Pessoa('Paulo', 'Henrique');
const p2 = new Pessoa2('Paulo', 'Henrique');
console.log(p1);
console.log(p1.falar());
console.log(p2);
console.log(p2.falar());