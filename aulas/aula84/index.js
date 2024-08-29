//Filter -> Sempre retornar um array, com a mesma quantidade de elementos. ou menos.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array) //A cada interação ele manda os valores, indices e o array completo.
//     return valor > 10
// });




//Tentei fazer sem filter
// let arrNum = [];

// for(let num of numeros) {
//     if (num > 10) {
//         arrNum.push(num);
//     }
// }

// console.log(arrNum);