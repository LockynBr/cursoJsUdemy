// function* geredora1() { //Para usar uma função geradora, precisamos utilizar o asteristico.
//     //Código qualquer ...
//     yield 'Valor 1'; //É quase um return, pois ele tem a função de retornar.
//     //Código qualquer ...
//     yield 'Valor 2';
//     //Código qualquer ...
//     yield 'Valor 3';
// }

// const g1 = geradora1();
/*
console.log(g1.next().value); //Precisamos utilizar o next para exprimir o valor. Utilizamos o value para pegar apenas o valor.
console.log(g1.next().value);
console.log(g1.next()); 
console.log(g1.next()); //Quando o done receber true, significa que a função foi encerrada.

*/
//Podemos também interar com o for, pois ele sabe exatamente aonde irá parar.
// for (let valor of g1) {
//     console.log(valor);
// }

/*
//Esse é um gerador infinito, pois ele nunca para.
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
*/

// function* geradora3() {
//     yield 0;
//     yield 1;
//     yield 2;
// }

// function* geradora4() {
//     yield* geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = geradora4();

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }

    // ...

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();