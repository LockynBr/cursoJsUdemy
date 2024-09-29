require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('ready');
    }).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo'); 
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'secreto', // Uma chave secreta usada para criptografar o cookie da sessão
    store: MongoStore.create({  // Conexão com banco     
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false, // Não salva a sessão se nada foi modificado
    saveUninitialized: false, // Só salva a sessão se ela for inicializada
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias de cookie
        httpOnly: true // O cookie só pode ser acessado via HTTP
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
