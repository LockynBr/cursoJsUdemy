const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação 
const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

//Podemos mudar o nome dá variavel, apenas colocando o nome que está no objeto, dois pontos e o novo nome.
// const { nome: n, sobrenome } = pessoa;
// console.log(n, sobrenome);

//Podemos também atribuir um valor padrão ao valor do objeto, pois caso não exista, será atribuido tal valor.
// const { nome = '', sobrenome } = pessoa;
// console.log(nome, sobrenome);

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);