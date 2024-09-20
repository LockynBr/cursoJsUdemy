// module.exports = function(x, y) { // Faz algo bem similar ao default
//     return x * y;
// };

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo`);
    }
}
