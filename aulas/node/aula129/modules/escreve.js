// const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf-8'}); // Flags: w - apaga tudo e reescreve, a - adiciona mais coisas dentro do arquivo.

const fs = require('fs').promises; // Importa o file system e recebe uma promise

module.exports = (caminho, dados) => { // Recebe o caminho e os dados que serão colocados no arquivo
    fs.writeFile(caminho, dados, { flag: 'w'}); // Escreve um arquivo.
}
