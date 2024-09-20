const fs = require('fs').promises;
const path = require('path');

// Função que lê o diretório e identifica a pasta
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // Caso não seja passado uma pasta, será utilizado a pasta atual.
    const files = await fs.readdir(rootDir); //Lista todos os arquivos do caminho desejado.
    
    walk(files, rootDir); //Chama a função walk e passa os arquivos e o local da pasta.
}

// Função que lista todos os diretorios
async function walk(files, rootDir) {
    for(let file of files) { //Processa cada arquivo individualmente
        const fileFullPath = path.resolve(rootDir, file); // Cria o caminho do diretorio completo.
        const stats = await fs.stat(fileFullPath); // Testa se é um arquivo ou diretório
        
        // Ignora os arquivos com uma rejex
        if(/\.git/g.test(fileFullPath)) continue; 
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) { // Verifica se o caminho é um diretório, se for, será chamado recursivamente para ler os subdiretórios
            readdir(fileFullPath);
            continue;
        }

        if(!/\.html$/g.test(fileFullPath)) continue; // Exprime os arquivos .html

        console.log(fileFullPath);
    }
}

readdir('D:/HdAntigo/Estudos/cursoJsUdemy'); // Chama a função com uma pasta especifica

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));