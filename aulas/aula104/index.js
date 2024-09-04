class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado!`)
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado!`)
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //Puxa as informações da classe pai.
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
}

// A herança vem de cima para baixo, ou seja, os pais não herdam nada nos filhos, mas ao contrario acontece.

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S24 Ultra');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
