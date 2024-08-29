// Some todos os números (reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total1 = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); //Valor inicial do acumulador, caso não seja mandando, o valor será o primeiro item do array.

console.log(total1)

const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador += valor;
    }

    return acumulador;
}, 0);

console.log(total2)

