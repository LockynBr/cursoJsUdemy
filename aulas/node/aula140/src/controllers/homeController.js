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
    res.render('index');
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
