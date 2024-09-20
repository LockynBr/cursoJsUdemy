const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //Cria o caminho completo
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');

// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luiza' },
// ];
// const json = JSON.stringify(pessoas, '', 2); // Transformar os dados em um json
// escreve(caminhoArquivo, json); // Utiliza a função escrever que está em outro modulo

async function lerArquivo (caminho) {  // Função que ler arquivos
    const dados = await ler(caminho); // Pega a função ler que vem do outro modulo e passa o caminho
    //return dados;
    retornaDados(dados); // Utiliza a função que retorna os dados.
}

// const dadosArquivo = lerArquivo(caminhoArquivo)
//     .then(resultado => console.log(resultado));

function retornaDados(dados) { 
    dados = JSON.parse(dados); // Pega os dados recebidos e transforma em um objeto
    
    dados.forEach(dado => { //Exprime cada dado
        console.log(dado);
    });
}

lerArquivo(caminhoArquivo); // Chama o ler arquivo