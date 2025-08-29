// npm init -> inicia a API
// npm i express -> biblioteca do express
const express = require("express")
const app = express()
const port = 3001
app.use(express.json())

// npm i mysql2n
const db = require("./db")

// npm i bcrypt-
const bcrypt = require("bcrypt")
app.post("/cadastrar", async(req, res)=>{
  const cliente = req.body
    const senhaCript = bcrypt.hashSync(cliente.senha,10)
    try{
      const resultado = await db.pool.query(
       `INSERT INTO clientes (nome_completo,cpf,estado, cidade, bairro, n_casa, rua, cep, email, telefone, senha)
        VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
        [cliente.nome_completo,cliente.cpf,cliente.estado,cliente.cidade,cliente.bairro,cliente.n_casa,cliente.rua,cliente.cep,cliente.email,cliente.telefone,senhaCript]
      )
      res.status(200).send("Cliente cadastrado!")
    } catch (erro) {  
      res.status(500).send("Erro interno")
      console.log(erro)
    }
  res.send("senhaCript")
})
app.get("/usuarios", (req, res)=>{
  res.send(usuarios)
})

app.listen(port, ()=>{
  console.log("API RODANDO NA PORTA" + port)
})