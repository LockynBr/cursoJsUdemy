const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let hora = 0;
let minuto = 0;
let segundo = 0;
let intervalo;

function zeroEsquerda(n) {
    return (n <= 9) ? `0${n}` : n;
}

function adicionandoTempo() {
    segundo++;

    if (segundo === 60) {
        segundo = 0;
        minuto++;

        if (minuto === 60) {
            minuto = 0;
            hora++;
        }
    }
    relogio.textContent = `${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}:${zeroEsquerda(segundo)}`;
}

function iniciarRelogio() {
    relogio.style.color = 'black';
    if(!intervalo) {
        intervalo = setInterval(adicionandoTempo, 1000);
    }
}

function pausarRelogio() {
    relogio.style.color = 'red';
    clearInterval(intervalo);
    intervalo = null;
}

function zerarRelogio() {
    pausarRelogio();
    relogio.style.color = 'black';
    hora = 0;
    minuto = 0;
    segundo = 0;
    relogio.textContent = '00:00:00';
}

iniciar.addEventListener('click', iniciarRelogio);
pausar.addEventListener('click', pausarRelogio);
zerar.addEventListener('click', zerarRelogio);