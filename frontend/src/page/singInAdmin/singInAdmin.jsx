import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import funcionarios from '../../public/funcionarios.jpg'
import { Navbar } from '../../components/navbar/navbar'
import welcome from '../../public/welcome.png'

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



/* estilizaçõa do Styled-components */
// estilização unicas 
const BoxFormsEdit = styled(BoxForms)`
    height: 250px;
    margin-bottom: 50px;
`




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
                <Navbar />
                <Container>
                    <Form  onSubmit={this.handleSubmit}>
                        <div>
                            <Title>Entrar com a sua conta</Title>
                        </div>
                        <BoxFormsEdit>
                            <DivForm>
                                <Label>nome</Label>
                                <Input
                                placeholder='Digite o seu nome'
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
                        </BoxFormsEdit>    
                        
                        <Button type='submit' >Entrar</Button>
                        
                    </Form>
                    <BoxImg>
                        <ImgHome src={welcome} alt="" />
                    </BoxImg>
                </Container>
                
            </div>
        )
    }
}