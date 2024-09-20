const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(random(65, 91));
const geraMinuscula = () => String.fromCharCode(random(97, 123));
const geraNumero = () => String.fromCharCode(random(48, 58));
const simbolos = ',.;~^[]{}!@#$%&*()_-=+/?';
const geraSimbolo = () => simbolos[random(0, simbolos.length)];

export default function geraSenha(qtd, maius, minus, nums, simb) {
    const senhaArr = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maius && senhaArr.push(geraMaiuscula());
        minus && senhaArr.push(geraMinuscula());
        nums && senhaArr.push(geraNumero());
        simb && senhaArr.push(geraSimbolo());
    }

    if (qtd > 20) {
        return 'Quantidade maior que a permitida.';
    }
    
    return senhaArr.join('').slice(0, qtd);
}
