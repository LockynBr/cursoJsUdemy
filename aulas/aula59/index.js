const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Continue continua para próxima interação.
//Break sai do laço

// for (let numero of numeros) {
    
//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break;
//     }
// }

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++; //Sempre atualizar a variável de controle quando tiver um continue ou break, pois pode cair em um loop infinito.
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }
    i++;
}