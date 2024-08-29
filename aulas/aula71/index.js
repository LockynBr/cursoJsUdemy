const nome = 'Paulo';

function falaNome() {
    const nome = 'Henrique';//Se essa variável não existisse, seria puxado a variável do escopo global
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();