require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

const config = require('./config/env.config.json')[process.env.NODE_ENV || 'development'];

const app = express();
app.disable('x-powered-by');
app.config = config;
cors({ credentials: true, origin: true });
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.locals.title = "Book Author app";
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use('/', require('./server/api'));

//após tentar casar todas as rotas a ultima rota que sobrou é not found
app.get('*', (req, res) => {
  res.status(404).send('<html><head><style>body {font-family: Helvetica, Arial, Sans-Serif;margin-top: 5em;}h1 {font-size: 3em;}h2 {font-size: 2em}</style></head></body><center><h1>Página não encontrada (Not Found)</h1><h2>(╯°□°）╯︵ ┻━┻</h2><br>O endereço solicitado não foi encontrado nesse servidor.<br>Verifique o url e tente novamente<br><h2>Erro: 404</h2></center></body></html>');
});

module.exports = app;