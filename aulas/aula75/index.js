// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter - Pega uma função que vai apenas retonar uma valor, e transforma como se fosse uma string.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter - Faz a setagem de um valor que é recebido e também transforma a função em uma string.
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto = 'NADA') {
            return `${this.nome} está falando sobre ${assunto}`;
        },

        altura: a,
        peso: p,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Paulo', 'Henrique', 1.75, 70);
console.log(p1.nomeCompleto)
console.log(p1.imc);

const p2 = criaPessoa('Lucas', 'Oliveira', 1.80, 80);
p2.nomeCompleto = 'Luiz Otávio Miranda';
console.log(p2.nomeCompleto);
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.imc);

// const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
// const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
// const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

// console.log(p1.imc);
// console.log(p2.imc);
// console.log(p3.imc);
