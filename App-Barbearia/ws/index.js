const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');

app.use(morgan('dev'));

app.set('port', 8000);

app.listen(app.get('port'), () => {
    console.log(`WS escutando na porta ${app.get('port')}`);
});