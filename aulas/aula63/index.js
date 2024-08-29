function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.'); //Com o throw podemos mostrar uma flag para quem estiver vendo, podemos criar nossas próprias classes, mas també podemos usar as própias do JS.
    }

    return x + y;
}

try { //O try irá capturar algo e caso tiver algum erro, ele irá mandar para o catch que pode passar uma mensagem de erro.
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error); //Exprimi o erro igual do JS
    console.log('Alguma coisa mais amigável para o usuário.');
}