import React from 'react'
import axios from 'axios'


import styled from 'styled-components'


const Container = styled.div`
  width:  90vw;
  height: auto;
  min-height: calc(100vh - 100px);
  overflow-x: hidden;
  margin: auto;
  display: grid;
  align-items: top;

`;


const Box = styled.div`
  width: calc(100vw - 500px);
  
  height: 150px;
  
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  text-align: center;
  margin-top: 40px;
  align-items: center;
  color: white;
  font-size: 1.3em;
 
`;

const Img = styled.img`
  width:  200px;
  height: 120px;
`;

const Title = styled.p`
  font-size: 1.4em;
`;




export default class Ped extends React.Component{
    

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
                

                
                
                <h1>Pedidos</h1>
                
                
            </Container>
        )
    }
}