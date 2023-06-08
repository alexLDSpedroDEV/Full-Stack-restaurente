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
  max-height: 150px;
`;

const Title = styled.p`
  font-size: 1.4em;
`;




export default class MostrarTodos extends React.Component{
    

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
                

                {/* <Boxtitles>
                    <div>
                        <Title>Nome</Title>
                    </div>
                    <div>
                        <Title>Valor</Title>
                    </div>
                    <div>
                        <Title>Tempo de preparo</Title>
                    </div>
                    <div>
                        <Title>imagens</Title>
                    </div>
                    
                </Boxtitles> */}
                
                
                
                {
                    //pegando todos os dados que estão na lista carro no state e mapeando e colocando em carro
                    this.state.carros.map(produto=>

                        //mostrando os dados mapeados
                        <Box  key={produto._id} categoria={produto.tipo}>
                            <p>{produto.nomeProduto}</p>
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