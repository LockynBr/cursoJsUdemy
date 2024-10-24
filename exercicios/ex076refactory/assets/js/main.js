function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.key !== 'Enter') return;
            this.realizarConta();
        });
    };


    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el);

            if(el.classList.contains('btn-clear')) this.clear();

            if(el.classList.contains('btn-del')) this.del();

            if(el.classList.contains('btn-eq')) this.realizarConta();
        });
    };

    
    this.realizarConta = () => {
        try {
            let conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = valor => {
        this.display.value += valor.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);
};

const calculadora = new Calculadora();
calculadora.inicia();