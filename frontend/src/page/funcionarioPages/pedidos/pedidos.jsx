import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import Ped from '../../../components/ped/ped';



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







export const Pedidos = () => {
    
    const [tela, setTela] = useState(0)

    
    const linkPaginas = (e) =>{
        setTela(e)
    }

    const returnPages = () => {
        if(tela == 1) {
            
            return <Ped />
        } 
    
    }
    

        return(
            <>
                <Container>
                    <Box>
                        
                        {/* aonde as paginas vão ser carregadas */}
                        {returnPages()}
                    </Box>
                    
                    
                </Container>
            </>
        )
}
