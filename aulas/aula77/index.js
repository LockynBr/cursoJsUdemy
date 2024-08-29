// Função construtura -> Objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados.
    const id = 123456;
    const metodoInterno = function() {

    };

    //Atributos ou métodos públicos.
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Paulo', 'Henrique');
const p2 = new Pessoa('Luiz', 'Otávio');

p1.metodo();
