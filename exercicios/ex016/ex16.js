const nome = 'Paulo Henrique';
const sobrenome = 'Luz';
const idade = 20;
const peso = 70;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`) 
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
