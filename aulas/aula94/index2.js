function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criamos os métodos do produto no prototype.

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
};
// Utilizamos o setPrototype para setar os métodos do produto no p2.
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);

// Aqui criamos um objeto e passamos o prototype do produto para o novo objeto, depois podemos criar os atributos, mas também podemos utilizar as prorpiedades do defineProperties nos atributos.
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);

// p3.preco = 113;
// p3.aumento(10);
// console.log(p3);