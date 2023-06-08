import React, {useEffect,useState}from 'react'
import axios from 'axios'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import SingInAdmin from '../../singInAdmin/singInAdmin'

const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: url(${bg});
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Imgs = styled.img`
  width: 200px;
  height: auto;
  
  color: white;
`;




export default class FuncionarioIndex extends React.Component{
    

    //usando o state do react para criar um list de carros
    state={
        produtos:[],  
    }
    
    //criando um function acinada para pegar os dados do backend
    componentDidMount(){
        axios.get('http://localhost:8080/login/funcionarios/produtos')
        .then(res => {
            
            //colocando todos os dados que pegamos do backend no dadosCarros
            const produto=res.data;
            console.log(res.data)

            //usando a funçao setState para colocar todos os dados de dadosCarros em carros
            this.setState({produtos: produto})
        })
    }

    
    
    

    render() {
        
        const [tela, setTela] = useState(0)

        useEffect(() => {
            const url = window.location.href
            const res = url.split('?')
            setTela(res[1])
        })

        const linkPaginas = (e) => {
            if(e == 1) {
            window.open('http://localhost:3000/admin/index','_self')
            } else if (e == 2) {
            window.open('http://localhost:3000/admin/index?2','_self')
            } 
            
        }


        const retunrpage = () => {
            if(tela == 1){
            return 
            } else if (tela == 2) {
            return <SingInAdmin/>
            } 
        }


        return(
            <Container>
                

                
                
                
                {
                    //pegando todos os dados que estão na lista carro no state e mapeando e colocando em carro
                    this.state.produtos.map(produto=>

                        //mostrando os dados mapeados
                        <div  key={produto._id}>
                            <p>{produto.nomeProduto}</p>
                            <p>{produto.tempoProduto}</p> 
                            <p>R$: {produto.valorProduto}</p>  
                            <Imgs src={produto.urlProduto}/> 
                            {retunrpage()}                      
                        </div>

                        
                        
                    )
                }
                <button onClick={() => linkPaginas(2)}>dawd</button>
                
            </Container>
        )
    }
}