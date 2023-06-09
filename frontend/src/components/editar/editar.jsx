import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


/* estilizaçõa do Styled-components */
const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: auto;
  width: 450px;
  height: 60px;
  margin-top: 100px;
`;
const Container = styled.div`
  width: calc(100vw - 450px);
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: start;
  color: white;
`;

const FormNewFuncionario = styled.form`
    width: calc(100vw - 450px);
    height: auto;
    display: grid;
    justify-content: center;
`;


const Title = styled.h1`
    font-size: 2em;
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
    width: 500px;
    margin: auto;
`;





export default class Editar extends React.Component{
    

    //Criando um json para armazenar os dados do backend
    constructor(props){
        super(props)
        
        //estou criando json para enviar ao backend
        this.state = {
            name: "",
            senha: "",
            email: "", 
            cargo: "",
        }

        
        //enviando tudos que esta no constructor para o handleSubmit
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //função para criar novos carros no banco de dados
    handleSubmit(e) {
        //pevinindo recarregamento da pagina
        e.preventDefault();
        
        
        //enviando os dados do state (json que criamos) para a url do backend
        axios.post('http://localhost:8080/login/login/admin', this.state)
        .then(res => {
            alert("Funcionario registrado com sucesso")
        })
        .catch = (erro) =>{
            console.log(erro)
        }
   
    }
    
    
    
    render() {

        
        return(
            <div>
                <Container>
                    <FormNewFuncionario  onSubmit={this.handleSubmit}>
                       
                        <Title>Cadastrar novo funcionario</Title>
                        <DivForm>
                            <Label>Nome</Label>
                            <Input
                            placeholder='Digite o nome'
                            type='text'
                            className='form_input'
                            onChange={ e => this.setState({name: e.target.value})}
                            />
                        </DivForm>

                        <DivForm>
                            <Label>Email</Label>
                            <Input
                            placeholder='Digite o email'
                            type='email'
                            className='form_input'
                            onChange={ e => this.setState({email: e.target.value})}
                            />
                        </DivForm>

                        <DivForm>
                            <Label>Senha</Label>
                            <Input
                            placeholder='Digite a senha'
                            type='password'
                            className='form_input'
                            onChange={ e => this.setState({senha: e.target.value})}
                            />
                        </DivForm>
                        <DivForm>
                            <Label>Cargo</Label>
                            <Input
                            placeholder='Digite o cargo '
                            type='text'
                            className='form_input'
                            onChange={ e => this.setState({cargo: e.target.value})}
                            />
                        </DivForm>

                        <Button type='submit' >Enviar</Button>
                    </FormNewFuncionario>
                    
                </Container>
                
            </div>
        )
    }
}