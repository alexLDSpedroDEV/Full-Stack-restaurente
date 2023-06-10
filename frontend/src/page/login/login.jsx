import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import laurels from '../../public/laurels.png'
import { Navbar } from '../../components/navbar/navbar'

//importando os estilos do styled-components
import { Container } from '../../styles/styledComponets'
import { Button } from '../../styles/styledComponets'
import { Form } from '../../styles/styledComponets'
import { Title } from '../../styles/styledComponets'
import { SubTitle } from '../../styles/styledComponets'
import { TitleLink } from '../../styles/styledComponets'
import { Input } from '../../styles/styledComponets'
import { Label } from '../../styles/styledComponets'
import { DivForm } from '../../styles/styledComponets'
import { BoxForms } from '../../styles/styledComponets'
import { BoxImg } from '../../styles/styledComponets'
import { ImgHome } from '../../styles/styledComponets'


//estilização unicas da pagina
const Btn = styled(Button)`
    margin-top: 25px;
`



export default class CreatedCar extends React.Component{
    
    

   
    //Criando um json para armazenar os dados do backend
    constructor(props){
        super(props)
        
        //estou criando json para enviar ao backend
        this.state = {
            name: "",
            senha: "",
            email: "", 
        }

        
        //enviando tudos que esta no constructor para o handleSubmit
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //função para criar novos carros no banco de dados
    handleSubmit(e) {
        //pevinindo recarregamento da pagina
        e.preventDefault();
        
        
        //enviando os dados do state (json que criamos) para a url do backend
        axios.post('http://localhost:8080/login', this.state)
        .then(res => {
            alert("Registrado com sucesso")
            window.open('http://localhost:3000/login/catalago','_self')
        })
   
    }
    openPag(){
        window.open('http://localhost:3000/singin','_self')
    }
    
    
    render() {
        return(
            <div>
                <Navbar />
                <Container>
                    
                    <Form  onSubmit={this.handleSubmit}>
                        <div>
                            <Title>Criar uma nova conta</Title>
                            <SubTitle>Se você ja tem uma conta? <TitleLink href="/singin">Login</TitleLink></SubTitle>
                        </div>
                        <BoxForms>
                            <DivForm>
                                <Label>Qual o seu nome</Label>
                                <Input
                                placeholder='Digite o nome do carro'
                                type='text'
                                className='form_input'
                                onChange={ e => this.setState({name: e.target.value})}
                                />
                            </DivForm>

                            <DivForm>
                                <Label>Qual o seu Email</Label>
                                <Input
                                placeholder='Digite o seu email'
                                type='email'
                                className='form_input'
                                onChange={ e => this.setState({email: e.target.value})}
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
                        </BoxForms>    
                        
                        <Btn type='submit' >Enviar</Btn>
                        
                    </Form>
                    <BoxImg>
                        <ImgHome src={laurels} alt="" />
                    </BoxImg>
                </Container>
                
            </div>
        )
    }
}