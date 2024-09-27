// const HomeModel = require('../models/HomeModel');

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.create({
//     titulo: 'Outro titulo do bom',
//     descricao: 'Outra descrição da boa.'
// }).then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInicial = (req, res) => { //Os parametros são req, res e next.
    req.flash('info', 'Olá mundo!');
    req.flash('error', 'Houve um erro!');
    req.flash('sucess', 'É sucesso!');
    console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));


    //req.session.usuario = { nome: 'Luiz', logado: true };
    //console.log(req.session.usuario);
    res.render('index');
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
