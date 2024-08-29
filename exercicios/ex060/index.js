function maiorNumero(a, b) {
    if (a > b) {
        return `${a} é maior que ${b}`;
    } else if(a === b) {
        return `${a} é igual a ${b}`;
    } else {
        return `${b} é maior que ${a}`;
    }
}

console.log(maiorNumero(3, 5));

// const max = (x, y) => x > y ? x : y;
// console.log(max(10, 5))