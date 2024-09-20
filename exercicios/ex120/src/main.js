import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

// (function() {
//     const gera = new GeraCPF();
//     const cpfGerado = document.querySelector('.cpf-gerado');
//     cpfGerado.innerHTML = gera.geraNovoCpf();
// })();

export default function adicionarCpf() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
};