const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroEmDobro = numeros.map(valor => valor * 2);
console.log(numeroEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
const semNome = pessoas.map(obj => ({idade: obj.idade})); //Se tentarmos exprimir com as chaves, não irá dá certo, pois o compilador irá confundir com as chaves da função, então devemos utilizar os parênteses para assim usar as chaves.
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj} //Copiando o objeto para outro, sendo assim não será mudado o original.
    newObj.id = indice + 1;
    return newObj;
});

//3-
//Podemos fazer desse jeito também, mas o id irá para o final do objeto. Dessa forma irá pegar o objeto original
// const comIds = pessoas.map(function(obj, indice) {
//     obj.id = indice + 1;
//     return obj;
// });

// const comIds = pessoas.map(function(obj, indice) {
//     return {id: indice + 1, nome: obj.nome, idade: obj.idade};
// });

//2-
// Podemos criar um objeto e adicionar o objeto.chave
// const semNome = pessoas.map(function(obj) {
//     return {idade: obj.idade};
// });

// Podemos também deletar o objeto e exprimir apenas a idade
// const semNome = pessoas.map(function(obj) {
//     delete obj.nome
//     return obj;
// });


console.log(nomes);
console.log(semNome);
console.log(comIds);
//console.log(pessoas);