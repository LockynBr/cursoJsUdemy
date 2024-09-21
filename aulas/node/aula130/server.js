// Express é um microframework
const express = require('express');
const app = express();

// O Expresse vai ajudar a acessar a rota pelo navegador

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE  

// Devesse utilizar uma porta própria para o express, pois se houver conflito, não irá rodar.

app.get('/', (req, res) => { // requisição é o que eu estou pedindo / resposta é o que eu vou mandar para o servidor
    res.send(`
        <form action="/" method="POST">
            Nome: <input name="nome" type="text">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
