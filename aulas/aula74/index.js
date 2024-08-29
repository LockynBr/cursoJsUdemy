// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    
    const sobrenome = 'Henrique';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Paulo'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(20, 70, 1.75);