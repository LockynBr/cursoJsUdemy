function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
    return new Promise((resolve, reject) => { //Para utilizar as promisse, ou promessas, é preciso instânciar e passar os dos parâmetros padrão, que são eles resolve e reject.
        if(typeof msg !== 'string') reject('Isso não é uma string'); //Caso o valor seja rejeitado, sera mandado para o catch com erro.

        setTimeout(() => {
            resolve(msg); //Quando passamos o resolve, ele será mandado para o then
        }, tempo);
    });

}

wait('Conexão com o BD', random(1, 3)).then(resposta => {
    console.log(resposta);
    return wait('Buscando dados da BASE', random(1, 3));
}).then(resposta => {
    console.log(resposta);
    return wait(22222, random(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Exibe dados na tela');
}).catch(e => {
    console.log('Error:', e);
});

console.log('Isso aqui será exibido antes de qualquer promisse');