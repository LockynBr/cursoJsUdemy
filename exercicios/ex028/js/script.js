const numero = Number(prompt('Digite um número:'));
const texto =document.getElementById('texto');
document.getElementById('numero-titulo').innerHTML = numero;

texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;

let inteiro = ""
if(Number.isInteger(numero)) {
    inteiro = "Sim"
} else {
    inteiro = "Não"
}

texto.innerHTML += `<p>${numero} É inteiro: ${inteiro}</p>`;

let naoNumero = ""
if(Number.isNaN(numero)) {
    naoNumero = "Sim";
} else {
    naoNumero = "Não";
}

texto.innerHTML += `<p>É NaN: ${naoNumero}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`