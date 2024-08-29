const a = {
    nome: 'Paulo',
    sobrenome: 'Henrique'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);