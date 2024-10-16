const _velocidade = Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    //Getter é usado quando o valor é pedido
    get velocidade() {
        return this[_velocidade];
    }

    //Setter é utilizado quando o valor é reatribuído
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 55;
console.log(c1.velocidade);