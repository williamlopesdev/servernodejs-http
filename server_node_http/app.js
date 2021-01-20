const express = require('express')
const app = express()

app.set('view engine', 'ejs')

/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contato.html')
});
*/
/*
app.get("/", (req, res) =>{
    res.render('secao/index');
});
*/
app.get('/contato', (req, res) =>{
    res.render('secao/contato');
});

app.get('/produtos', (req, res) =>{
    res.render('secao/produtos');
});

app.get('/loja', (req, res) =>{
    res.render('secao/loja');
});

/*
var bodyParser = require('body-parser')

const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())
*/
//config body-parser

/*
http://localhost:1910/produtos
*/

app.get('/', (req, res)=> {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:  '',
        database: 'mgeek'
    })

    connection.query("select * from produtos", (error, result)=>{
        res.json(result)
    })

});


/*
app.get('/adicionar/mensagem', (req, res)=> {
    res.render('admin/contato')
})

app.post('/mensagem/salvar', (req, res)=>{
    const post = req.body
    console.log(post)

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:  '',
        database: 'mgeek'
    });

    connection.query('INSERT INTO comentarios SET?', post, ()=>{
        res.redirect('/')
    })
})
*/
app.listen(1910, () => {
    console.log('O servidor subiu na porta 1910');
});