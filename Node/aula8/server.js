const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

// /profiles/1234?campanha=googleads&nomecampanha=seila

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST"> 
                Nome do cliente: <input type="text" name="nome">
                <button>Enviar</button>
            </form>`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofiles);
})

app.post('/', (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.get('/contato',(req,res) => {
    res.send('Obrigado por entrar em constato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});