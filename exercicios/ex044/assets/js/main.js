const button = document.querySelector('#button');
const resultado = document.querySelector('#resultado');
button.addEventListener("click", calcularImc);

function calcularImc(event) {
    event.preventDefault();
    
    const pesoInput = document.querySelector('#peso').value;
    const alturaInput = document.querySelector('#altura').value;
    const peso = Number(pesoInput);
    const altura = Number(alturaInput);
    const imc = (peso / (altura * altura)).toFixed(1);

    //Pegando o imc e descobrindo qual grau.
    let descricaoImc;

    if(imc < 18.5) {
        descricaoImc = 'Abaixo do Peso';
    }else if (imc >= 18.5 && imc <=24.9) {
        descricaoImc = 'Peso Normal';
    }else if (imc >= 25 && imc <= 29.9) {
        descricaoImc = 'Sobrepeso';
    }else if (imc >= 30 && imc <= 34.9) {
        descricaoImc = 'Obesidade grau 1';
    }else if (imc >= 35 && imc <= 39.9) {
        descricaoImc = 'Obesidade grau 2';
    }else if (imc >= 40) {
        descricaoImc = 'Obesidade grau 3';
    }

    //Transcrevendo erros e resultado.
    if(pesoInput == "" || pesoInput == 0) {
        resultado.innerHTML = '<p>Peso Inválido</p>';
        resultado.style.backgroundColor = '#ff8a8a';
    }else if(alturaInput === "" || alturaInput == 0) {
        resultado.innerHTML = '<p>Altura Inválida</p>';
        resultado.style.backgroundColor = '#ff8a8a';
    } else {
        resultado.innerHTML = `<p>Seu IMC é ${imc} (${descricaoImc})`;
        resultado.style.backgroundColor = '#36abff';
    }


}
