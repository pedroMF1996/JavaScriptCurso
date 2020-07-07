const express = require('express');
const app = express();
const route = require("./routes");
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.set('views',path.resolve(__dirname,'SRC','views'));
app.set('view engine', 'ejs');

app.use(route);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});