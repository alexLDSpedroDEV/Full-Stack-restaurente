import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import bg from '../../public/bg.png'

/* estilizaçõa do Styled-components */
const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  width: 400px;
  height: 60px;
  margin-top: 100px;
`;
const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: url(${bg});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormNewCar = styled.form`
    width: 90vw;
    height: 70vh;

    margin: auto;
    display: grid;
    justify-content: center;
    align-content: space-around;
    border-radius: 50px;
`;


const Title = styled.h1`
    font-size: 3em;
    color: white;
    text-transform: uppercase; 
`;

const Input = styled.input`
    width: 400px;
    padding: 10px 20px;

`;

const Label = styled.label`
    display: block;
    padding: 20px 0px;
    font-size: 1em;
    color: white;

`;

const DivForm = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;

`;





export default class SingInAdmin extends React.Component{
    
    

   
    //Criando um json para armazenar os dados do backend
    constructor(props){
        super(props)
        
        //estou criando json para enviar ao backend
        this.state = {

            senha: "",
            name: "", 
        }

        
        //enviando tudos que esta no constructor para o handleSubmit
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //função para criar novos carros no banco de dados
    handleSubmit(e) {
        //pevinindo recarregamento da pagina
        e.preventDefault();


        //enviando os dados do state (json que criamos) para a url do backend
        axios.get(`http://localhost:8080/login/admin/` + this.state.name)
        .then(res => {
            const dado = res.data
            if (dado.name == this.state.name && dado.senha == this.state.senha) {
                alert("Bem vindo so sistema de pedidos gericht")
                
                window.open("http://localhost:3000/admin/index", "_self")
                
            } else {
                //se o email ou a senha estiverem erradas ele da um aviso e reload na pagina 
                alert("Usuario ou senha estão incoretos")
                window.location.reload()
            }
           
        })
   
    }
    openPag(){
        window.history.go(null,null, "http://localhost:3000/login")
        
    }
    
    
    render() {
        return(
            <div>
                <Container>
                    <FormNewCar  onSubmit={this.handleSubmit}>

                        <Title>Admins Sing-in </Title>

                        <DivForm>
                            <Label>Digite o seu nome</Label>
                            <Input
                            placeholder='Digite o seu email'
                            type='text'
                            className='form_input'
                            onChange={ e => this.setState({name: e.target.value})}
                            />
                        </DivForm>

                        <DivForm>
                            <Label>Senha</Label>
                            <Input
                            placeholder='Digite a sua senha'
                            type='password'
                            className='form_input'
                            onChange={ e => this.setState({senha: e.target.value})}
                            />
                        </DivForm>

                        <Button type='submit'>Entrar</Button>
                    </FormNewCar>
                    <button type='text' onClick={() => this.openPag()}>Registrase</button>
                </Container>
                
            </div>
        )
    }
}