const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
//nomes.splice(índice, delete, elem1, elem2, elem3...);
//const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');

//POP
//const removidos = nomes.splice(-1, 1);

//SHIFT
//const removidos = nomes.splice(0, 1);

//PUSH
//nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda');

//UNSHIFT
//nomes.splice(0, 0, 'Luiz', 'Otávio');

console.log(nomes);

