const express = require('express')
const app = express()

//apenas usa o .get quando for enviar informações para o front-end
app.get('/', (requisicao, resposta) => {
    resposta.send("Meu back-end está funcionando!")
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3k!')
})