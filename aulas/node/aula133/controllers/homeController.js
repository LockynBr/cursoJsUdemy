exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input name="nome" type="text">
            <button>Enviar</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post');
};
