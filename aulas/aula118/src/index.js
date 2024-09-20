import multiplica, { nome, sobrenome, idade, soma } from './modulo1'; //Quando não tem as chaves, será importado o default
console.log(multiplica(5, 40));
console.log(nome, sobrenome, idade, soma(4, 4));

//import * as MeuModulo from './modulo1'; //Podemos também importar o módulo todo, mas só será exportado aqueles que tiverem o export no outro arquivo.
//console.log(MeuModulo);

//import { nome, sobrenome, idade, soma, Pessoa } from './modulo1';
// Podemos mudar o nome da variável utilizando o 'as'.
//ex: nome as nome2

// const p1 = new Pessoa('Paulo', 'Henrique');
// console.log(p1);

// console.log(nome, sobrenome, idade);
// console.log(soma(5, 5));

//Documentação import: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import
//Documentação export: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export