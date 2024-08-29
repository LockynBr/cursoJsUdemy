// defineProperty - difineProperties

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave. Se o enumerable estiver false, não será possivel ver pelo object.keys(), ou pelo for in.
        value: estoque, //Define o valor
        writable: false, //Dita se é possivel alterar o valor ou não.
        configurable: false //Dita se é possivel reconfigurar, ou seja, criar outro defineProperty ou deletar a variável.
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true, 
            configurable: true 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;

delete p1.estoque;

console.log(p1);

console.log(Object.keys(p1)); //Mostra as chaves do objeto

for(let chave in p1) {
    console.log(chave);
}