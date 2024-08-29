/*
Object.values
Object.entries
Object.assign(des, any)
object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/

const produto = { nome: 'Produto', preco: 1.8 };
const caneca = Object.assign({} , produto, { material: 'porcelana'}); //Ao invés de usarmos o spread, podemos utilizar o assign. Ele faz a mesma coisa para copiar um objeto. primeiro parâmetro recebe um objeto vazio, já no segundo irá receber outros objetos.

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

//const produto = { nome: 'Produto', preco: 1.8 };

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // O getOwnPropertyDescriptor é usado para ver as propriedades do objeto, no caso elas são as mesmas que definem o defineProperty.
console.log(Object.values(produto));// É quase a mesma coisa que o Object.keys, só o que muda é que o values irá pegar os valores das chaves.
console.log(Object.entries(produto)); // É a junção do keys e do entries, pois ele retorna um array com as chaves e os valores do objeto.

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}