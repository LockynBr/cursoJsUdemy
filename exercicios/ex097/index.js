let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
cpfArraySemDig = cpfArray.splice(-2, 2);

let acFor = 10;

const total = cpfArray.reduce((ac, val) => {
    let conta = Number(val) * acFor;
    ac += conta;
    acFor--;
    console.log(ac);
    return ac;
}, 0);

if(11 - (total % 11) === Number(cpfArraySemDig[0])) {
    cpfArray = Array.from(cpfLimpo);
    cpfArraySemDig = cpfArray.splice(-1, 1);

    let acFor = 11;
    const total = cpfArray.reduce((ac, val) => {
        let conta = Number(val) * acFor;
        ac += conta;
        acFor--;
        console.log(ac, val);
        return ac;
    }, 0);

    if(11 - (total % 11) === Number(cpfArraySemDig[0])) {
        console.log(`${cpf} CPF VÁLIDO!`);
    } else {
        console.log(`${cpf} CPF INVÁLIDO!`); 
    }
    
} else {
    console.log(`${cpf} CPF INVÁLIDO!`); 
}

