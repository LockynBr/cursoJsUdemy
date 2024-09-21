const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Trata o body da requisição

//          Parametros QueryString
// /profiles/12345?campanha=googleads

app.get('/', (req, res) => { 
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input name="nome" type="text">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:paramtro?', (req, res) => {
    // req.params - Partes da rota da url Ex: /profile/3
    // req.query - /profile/?chave1=valor1&chave2=valor2
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
