//importar o módulo do express
const express = require("express");

//importar o módulo do mysql para a manipulação de banco de dados 
const mysql = require("mysql");

//importar o módulo do cors para tratar urls que vem do frontend
const cors = require("cors");
const res = require("express/lib/response");
const req = require("express/lib/request");

// Vamos usar o servidor express passando como referência a constante app
const app = express();

// Preparar o servidor para receber dados em formato json ou nâo
app.use(express.json());

// Aplicar o cors no projeto
app.use(cors());

/*
Estabelecer a cenexão com o banco de dados e realizar um CRUD na base
*/
const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"musicadb"
});

/*
Testar e estabelecer conexão com banco de dados
*/ 
conexao.connect((erro)=>{
    if(erro){
        console.error("Erro ao tentar estabelecer conexão "+erro.stack);
        return;
    }
    console.log("Conectado ao banco ->"+conexao.threadId);
})

app.get("/listar/musica",(req,res)=>{
    conexao.query("SELECT * FROM musicadb.tbmusicas;",(erro,resultado)=>{
        res.status(200).send(resultado)
    })
})
//Subir o servidor na porta 5000
app.listen("5000",()=>console.log("Servidor online em: http://localhost:5000"));

