function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
    return new Promise((resolve, reject) => { 
        if(typeof msg !== 'string'){
             reject('Cai no erro');
             return; //Vai fazer com que a fução pare antes de retornar
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all - Retorna todos valores,caso não forem recusados. Promise.race - Retorna apenas o primeiro valor executado. Promise.resolve - Retorna um valor caso seja aceito. Promise.reject - Retorna um valor caso seja recusado.

const promises = [
    //'Primeiro valor',
    wait('Promise 1', 3000),
    wait('Promise 2', 500),
    wait('Promise 3', 1000),
    //wait(2000, 1000),
    //'Outro valor'
];

// Promise.all(promises).then(function(valor) {
//     console.log(valor);
// }).catch(function(erro) {
//     console.log(erro);
// });

// Promise.race(promises).then(function(valor) { //O race vai entregar o primeiro valor executado.
//     console.log(valor);
// }).catch(function(erro) {
//     console.log(erro);
// });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return wait('Baixei a página', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('ERRO', e));