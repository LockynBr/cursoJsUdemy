// ... rest, ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres);
// console.log(resto);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco);

//                    0          1          2
//                 0  1  2    3  4  5    6  7  8
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//Desse jeito é mais complicado, pois tem muitas virgulas, mas funciona.
const [,,[,,nove]] = numeros;
console.log(nove);
//Desse jeito é mais fácil de fazer uma desestruturação com arrays
// const [lista1, lista2, lista3] = numeros;
// console.log(lista3[2]);