import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import MostrarTodos from '../../../components/mostrarTodos/mostrarTodos'
import Bebidas from '../../../components/bebidas/bebida';
import Comida from '../../../components/comidas/comida';
import Entrada from '../../../components/entradas/entradas';



const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: url(${bg});
  display: flex;
  justify-content: center;
  align-items: start;
  color: white;
`;

const MenuLateral = styled.div`
  width: 400px;
  min-height: 100vh;

  cursor: pointer;
  background-color: black;
  display: grid;
  grid-template-rows: 100px 100px 100px 100px 100px;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Box = styled.div`
  width: calc(100vw - 400px);
  height: auto;
  min-height: 100vh;
  display: block;
  flex-direction: column;
  align-items: start;
  color: white;
  margin-bottom: 50px;
`;
const Nav = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const Logo = styled.img`
  width: 200px;
  padding: 20px 50px;
`;







export const Produtos = () => {
    
    const [tela, setTela] = useState(1)

    
    const linkPaginas = (e) =>{
        setTela(e)
    }

    const returnPages = () => {
        if(tela == 1) {
            
            return <MostrarTodos />
        } else if (tela == 2){
            return <Bebidas/>
        } else if (tela == 3){
            return <Comida/>
        } else if (tela == 4){
            return <Entrada/>
        }
    
    }
    

        return(
            <>
                <Container>
                    <Box>
                        <Nav>
                            <div onClick={() => linkPaginas(1)}>Mostrar todos</div>
                            <div onClick={() => linkPaginas(2)}>Bebidas</div>
                            <div onClick={() => linkPaginas(3)}>Comidas</div>
                            <div onClick={() => linkPaginas(4)}>Entradas</div>
                        </Nav>
                        {/* aonde as paginas vão ser carregadas */}
                        {returnPages()}
                    </Box>
                    
                    
                </Container>
            </>
        )
}
