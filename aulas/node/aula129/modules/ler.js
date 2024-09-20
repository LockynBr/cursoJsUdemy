const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf-8'); // Recebe o caminho do arquivo que será lido