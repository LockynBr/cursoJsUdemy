class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocarPilha() {
        console.log('Ok, vou trocar.');
    }

    static soma(x, y) {
        console.log(x + y);
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Os métodos estáticos não precisam ser instânciado, ou seja, é quase uma função normal, só muda que é dentro do escopo da class.
ControleRemoto.trocarPilha();
ControleRemoto.soma(1, 2);