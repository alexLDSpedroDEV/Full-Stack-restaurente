const router = require('express').Router()
const Pessoas = require('../models/person.jsx')
const Admins = require('../models/admins.jsx')

//Ler todos os dados 
router.get('/', async (req,res) => {
    try{
        //find  - buscando dados
        const pessoas = await Pessoas.find()

        res.status(200).json(pessoas)
    }
    catch(erro){
        res.status(500).json({erro: erro})
    }
})

// verificação se usuario existe
router.get('/:id', async (req,res) => {
    //extrair os dados da requisição
    const email = req.params.id
    
    console.log(email)

    try{
        const pessoa = await Pessoas.findOne({email: email})
        res.status(200).json(pessoa)
        console.log(pessoa)

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


//rota Created 
router.post("/", async (req,res) => {
    const {name, email, senha} = req.body

    //tornando os dados obrigatoria a vir
    !name ? res.status(422).json({alert: "O Nome é obrigatorio"}) : ""
    !email ? res.status(422).json({alert: "O Email é obrigatorio"}) : ""
    !senha ? res.status(422).json({alert: "A Senha é obrigatorio"}) : ""


    //criando um Json para receber os dados que pegamos da requisição

    const pessoas = {
        name,
        email,
        senha
    }

    //usando o metodo created
    try{
        //Salvando o dado no banco de dados
        await Pessoas.create(pessoas)
        res.status(201).json({message: "Dado inserido no servidor com sucesso"})
    }
    catch (error) {

        res.status(500).json({error: error})
    }
})

//deletando uma pessoas pelo ad
router.delete('/:id', async (req, res) => {
    //pegando dados que vei do front-end
    const id = req.params.id; 


    try {

        // Atualiza o documento no MongoDB
        const result = await Pessoas.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            res.send('Pessoa deletado com sucesso');
        } else {
            res.status(404).send('Pessoa não encontrado');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Erro interno do servidor.');
  }
})













//criando a rota de login dos admins do site
router.get('/admin', async (req,res) => {
    try{
        //find  - buscando dados
        const pessoas = await Admins.find()

        res.status(200).json(pessoas)
    }
    catch(erro){
        res.status(500).json({erro: erro})
    }
})

//rota Created 
router.post("/admin", async (req,res) => {
    const {name, email, senha} = req.body

    //tornando os dados obrigatoria a vir
    !name ? res.status(422).json({error: "O Nome é obrigatorio"}) : ""
    !email ? res.status(422).json({error: "O Email é obrigatorio"}) : ""
    !senha ? res.status(422).json({error: "A Senha é obrigatorio"}) : ""


    //criando um Json para receber os dados que pegamos da requisição

    const admin = {
        name,
        email,
        senha
    }

    //usando o metodo created
    try{
        //Salvando o dado no banco de dados
        await Admins.create(admin)
        res.status(201).json({message: "Dado inserido no servidor com sucesso"})
    }
    catch (error) {

        res.status(500).json({error: error})
    }
})

//deletando uma pessoas pelo ad
router.delete('/admin/:id', async (req, res) => {
    //pegando dados que vei do front-end
    const id = req.params.id; 


    try {

        // Atualiza o documento no MongoDB
        const result = await Admins.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            res.send('Admin deletado com sucesso');
        } else {
            res.status(404).send('Admin não encontrado');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Erro interno do servidor.');
  }
})


// verificação se usuario existe
router.get('/admin/:id', async (req,res) => {
    //extrair os dados da requisição
    const name = req.params.id
    
    console.log(name)

    try{
        const adnmins = await Admins.findOne({name: name})
        res.status(200).json(adnmins)
        console.log(adnmins)

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


module.exports = router