//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o íncide ou chave (string, array ou objeto)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let valor of nomes) {
    console.log(valor);
}

console.log('------------');

nomes.forEach(function(valor, inidce, array) {
    console.log(valor, inidce, array);
});