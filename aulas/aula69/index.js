// function funcao() {
//     console.log(arguments/*[0]*/); //Se não passarmos nenhuma variável para a função, mas passarmos parâmetros para ela, eles basicamente ficarão ocultos, só consguiremos vê-los se passarmos a palavra arguments.
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }

// funcao(1, 2, 3); //Se passarmos menos valores, será passado undefined o resto dos valores.

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
//Se tiver um parâmetro e ele estiver no meio e seja preciso que ele assuma um valor padrão, é preciso utilizar o undefined.
// funcao(2, undefined, 20);

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Paulo', sobrenome: 'Henrique', idade: 20});

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Paulo Henrique', 'Luz', 20]);

function conta(operador, acumulador, ...numeros) { //Podemos pegar os valores restante usando o rest operator, mas só é possivel no ultimo valor. Quando usamos o rest, não precisamos colocar algum array, pois elejá é transformado.
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50);

const restOp = (...args) => {
    console.log(args);
};
restOp('+', 0, 20, 30, 40, 50);