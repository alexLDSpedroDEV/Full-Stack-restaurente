import React from 'react'
import axios from 'axios'

//importando os estilos
import { Container } from '../../../styles/styledComponetsUsers';
import { Box } from '../../../styles/styledComponetsUsers';
import { Img } from '../../../styles/styledComponetsUsers';
import { Title } from '../../../styles/styledComponetsUsers';
import { SubTitle } from '../../../styles/styledComponetsUsers';
import { Buy } from '../../../styles/styledComponetsUsers';
import UserMostrarTodos from '../mostrarTodos/mostrarTodos';






export default class UserCarrinho extends React.Component{
    

    //usando o state do react para criar um list de carros
    state={
        carros:[],  
    }
    
    //criando um function acinada para pegar os dados do backend
    componentDidMount(){
        axios.get('http://localhost:8080/login/funcionarios/produtos')
        .then(res => {
            
            //colocando todos os dados que pegamos do backend no dadosCarros
            const dadosCarros=res.data;
            console.log(dadosCarros)
            //usando a funçao setState para colocar todos os dados de dadosCarros em carros
            this.setState({carros: dadosCarros})
        })
    }

   

    render() {
        const { dadosPedidos } = this.props
        
        return(
            <Container>

                <button onClick={() => console.log(dadosPedidos)}>dawd</button>
            </Container>
        )
    }
}