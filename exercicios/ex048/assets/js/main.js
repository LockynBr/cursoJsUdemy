/*
const h1Date = document.querySelector('#data-hora');
const data = new Date();

const diaAtual = data.getDate();
const anoAtual = data.getFullYear();

function week() {
    switch(data.getDay()) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return'Sexta-Feira';
        case 6:
            return 'Sábado';
    }
}

function month() {
    const mesesPortugues = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const meses = data.getMonth();
    const mesAtual = mesesPortugues[meses];
    return mesAtual;
}

const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

function addZeroToLeft(num) {
    return num < 10 ? `0${num}` : num;
}

h1Date.innerHTML = `${week()}, ${diaAtual} de ${month()} de ${anoAtual} ${addZeroToLeft(horas)}:${addZeroToLeft(minutos)}:${addZeroToLeft(segundos)}`;
*/

const h1Date = document.querySelector('#data-hora');
const data = new Date();
h1Date.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
