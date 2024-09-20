// const multiplicacao = require('./mod');

// console.log(multiplicacao(2, 2))

const Cachorro = require('./mod');

const cachorro = new Cachorro('Zed');
cachorro.latir();

console.log(__filename); // Caminho do arquivo
console.log(__dirname); // Caminho da pasta

const path = require('path');
console.log(path.resolve(__dirname, '..', '.', 'aula124', 'app.js')); 
// 1 ponto - Avança pasta, 2 pontos - volta pasta.