import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import { Produtos } from '../produtos/produtos';
import logo from "../../../public/gericht.png";
import { Pedidos } from '../pedidos/pedidos';
import { Funcionarios } from '../funcionarios/funcionarios';


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
  background-color: black;
  display: grid;
  grid-template-rows: 100px 100px 100px 100px 100px;
  align-items: center;
  padding: 0px 45px;
  justify-items: start;
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







export const FuncionarioIndex = () => {
    
    const [tela, setTela] = useState()

    
    const linkPaginas = (e) =>{
        setTela(e)
    }

    const returnPages = () => {
        if(tela == 1) {
            return <Produtos />
        } else if (tela == 2){
            return <Pedidos />
        } else if (tela == 3){
          return <Funcionarios />
        }
    }
    

        return(
            <>
                <Container>
                    <MenuLateral>
                        <div>
                            <Logo src={logo} />
                        </div>
                        <div onClick={() => linkPaginas(1)}>Produtos</div>
                        <div onClick={() => linkPaginas(2)}>Pedidos</div>
                        <div onClick={() => linkPaginas(3)}>Funcionarios</div>
                        <div onClick={() => linkPaginas(4)}>dashboard</div>
                    </MenuLateral>
                    
                    {returnPages()}
                    
                </Container>
            </>
        )
}
