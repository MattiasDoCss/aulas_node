const express = require("express")//Importa o express
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/', (requisicao, respostas) => {
    respostas.sendFile(`${caminho}/index.html`)
})

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3k")
})


