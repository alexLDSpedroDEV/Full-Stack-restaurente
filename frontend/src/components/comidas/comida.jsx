import React from 'react'
import axios from 'axios'

import styled from 'styled-components'
import { Container } from '../../styles/styledComponetsUsers';
import { Box } from '../../styles/styledComponetsUsers';
import { Img } from '../../styles/styledComponetsUsers';
import { Title } from '../../styles/styledComponetsUsers';







export default class Comida extends React.Component{
    

    //usando o state do react para criar um list de carros
    state={
        bebidas:[],  
    }
    
    //criando um function acinada para pegar os dados do backend
    componentDidMount(){
        axios.get(`http://localhost:8080/login/funcionarios/produto/filtado/` + `Comida`)
        .then(res => {
            
            //colocando todos os dados que pegamos do backend no dadosCarros
            const bebida = res.data;
            
            //usando a funçao setState para colocar todos os dados de dadosCarros em carros
            this.setState({bebidas: bebida})
        })
    }

   
    
    

    render() {
        
        return(
            <Container>
                

                
                
                
                
                {
                    //pegando todos os dados que estão na lista carro no state e mapeando e colocando em carro
                    this.state.bebidas.map(produto=>

                        //mostrando os dados mapeados
                        <Box  key={produto._id} categoria={produto.tipo}>
                            <Title>{produto.nomeProduto}</Title>
                            <p>{produto.tempoProduto} min</p>
                            <p>R$: {produto.valorProduto}</p>
                            <Img src={produto.urlProduto} alt="" />                                                       
                        </Box>
                        
                    )
                }
                
            </Container>
        )
    }
}