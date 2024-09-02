//Podemos utilizar os metodos separados por uma variável, ou utilizar dentro da factory function. 
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
}

//Podemos ligar os metódos da função com prototype desses dois jeitos, utilizando o assign ou o spread operator
const pessoaPrototype = Object.assign({}, falar, comer, beber);

//const pessoaPrototype = { ...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {
    // const pessoaPrototype = {
    //     falar() {
    //         console.log(`${this.nome} está falando.`);
    //     },

    //     comer() {
    //         console.log(`${this.nome} está comendo.`);
    //     },

    //     beber() {
    //         console.log(`${this.nome} está bebendo.`);
    //     }
    // };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A');
console.log(p1);