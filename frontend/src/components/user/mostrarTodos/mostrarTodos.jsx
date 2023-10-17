import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

//importando os estilos
import { Container } from '../../../styles/styledComponetsUsers';
import { Box } from '../../../styles/styledComponetsUsers';
import { Img } from '../../../styles/styledComponetsUsers';
import { Title } from '../../../styles/styledComponetsUsers';
import { SubTitle } from '../../../styles/styledComponetsUsers';
import { Buy } from '../../../styles/styledComponetsUsers';





export default class UserMostrarTodos extends React.Component{
    

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
        
        return(
            <Container>
                

                {
                    //pegando todos os dados que estão na lista carro no state e mapeando e colocando em carro
                    this.state.carros.map(produto=>

                        //mostrando os dados mapeados
                        <Box  key={produto._id} categoria={produto.tipo}>
                            <Title>{produto.nomeProduto}</Title>
                            <SubTitle>{produto.tempoProduto} min</SubTitle>
                            <SubTitle>R$: {produto.valorProduto}</SubTitle>
                            <Img src={produto.urlProduto} alt={produto.nomeProduto} />  
                            <Buy dadosPedidos={produto._id} >Pedir</Buy>   
                                                                              
                        </Box>
                        
                    )
                    
                }
                
                
            </Container>
        )
    }
}