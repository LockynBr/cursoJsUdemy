//Global
function retornaFuncao(nome) {
    const nome = 'Paulo';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());

// const nome = 'global';        // global
// function retornaFuncao() {
//     const nome = 'Paulo';
    
//     return function () {
//         return nome;        // retorno o nome que esta no escopo lexico
//     }
// }
// const funcao = retornaFuncao(); // retorna a funcao anonima
// console.dir(funcao()); // executa 
