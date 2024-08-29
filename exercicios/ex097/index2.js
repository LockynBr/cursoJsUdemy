let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // Remove caracteres não numéricos
let cpfArray = Array.from(cpfLimpo); // Transforma a string em um array de números
let cpfArraySemDig = cpfArray.splice(-2, 2); // Remove os dois últimos dígitos (os verificadores)

let acFor = 10; // Inicia o fator de multiplicação em 10

// Calcula o total para o primeiro dígito verificador
const total1 = cpfArray.reduce((ac, val) => {
    ac += Number(val) * acFor;
    acFor--;
    return ac;
}, 0);

// Verifica se o primeiro dígito verificador está correto
let digito1 = 11 - (total1 % 11);
if (digito1 > 9) digito1 = 0;

if(digito1 === Number(cpfArraySemDig[0])) {
    cpfArray.push(digito1); // Adiciona o primeiro dígito verificador ao array para o cálculo do segundo dígito
    acFor = 11; // Redefine o fator de multiplicação para 11

    // Calcula o total para o segundo dígito verificador
    const total2 = cpfArray.reduce((ac, val) => {
        ac += Number(val) * acFor;
        acFor--;
        return ac;
    }, 0);

    let digito2 = 11 - (total2 % 11);
    if (digito2 > 9) digito2 = 0;

    // Verifica se o segundo dígito verificador está correto
    if(digito2 === Number(cpfArraySemDig[1])) {
        cpfArray.push(digito2);

        // Verifica se o CPF reconstruído corresponde ao CPF original
        if(cpfArray.join('') === cpfLimpo) {
            console.log(`${cpf} CPF VÁLIDO!`);
        } 
        
    } else {
        console.log(`${cpf} CPF INVÁLIDO!`);
    }
} else {
    console.log(`${cpf} CPF INVÁLIDO!`);
}
