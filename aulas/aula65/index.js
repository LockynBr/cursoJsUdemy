function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () { //Executa o código por 10 segundos
    console.log(mostraHora());
}, 1000);

setTimeout(function() { //Para o código quando passar 3 segundos.
    clearInterval(timer);
}, 3000);

setTimeout(function() { //Depois de 5 segundo executa um código.
    console.log('Olá, Mundo!');
}, 5000);