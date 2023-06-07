const express = require('express')
const mongosse = require('mongoose')
const cors = require('cors');

const router = require('./router/router.jsx')

//colocando todos os recursos do express na variavel app
const app = express()
const PORT = "8080"


app.use(
    //comando para o express pode receber dados json
    express.urlencoded({
        extended: true,
    })
)

//mostrando para o express que eu vou mandar dados como JSON
app.use(express.json())

app.use(cors())

//Criando as Rotas
app.get("/", async (req, res) => {
    res.json({message: "Servidor rodando perfeitamente"})
})


app.use("/login", router)

//criando a conecção com o banco de dados: MongoDb
mongosse.connect('mongodb+srv://alexlopes:orquideas1809@cluid1.ekh4puk.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Conectado com o banco de dados")
    
    //Iniciando o servidor
    app.listen(PORT, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080")
    })
})
.catch(() => {
    console.log("servidor com poblema")
})



