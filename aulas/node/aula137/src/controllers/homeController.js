exports.paginaInicial = (req, res) => { //Os parametros são req, res e next.
    //console.log('Respondendo ao cliente');
    res.render('index');
    // console.log(`'Página inicial' Olha o que tem na req.session.nome ${req.session.nome}`);
    //next();
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
