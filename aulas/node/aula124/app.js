const path = require('path');
const axios = require('axios');

// axios('https:www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

//const { nome, sobrenome, falaNome } = require('./mod1'); //Podemos fazer também por desestruturação.

// const mod1 = require('./mod1');
//const falaNome = mod1.falaNome;

//const falaNome = require('./mod1').falaNome; // Podemos importar só a variável ou a função, é só colocarmos o nome na variável e o nome do que queremos importar no final.

//console.log(falaNome());

const { Pessoa } = require('./mod1'); //Importando uma classe.

const p1 = new Pessoa('Luiz');
console.log(p1);

