const express = require("express")//Importa o express

const app = express()

app.get('/', (requisicao, respostas) => {
    respostas.send("Seja bem-vindo ao meu servidor!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3k")
})


