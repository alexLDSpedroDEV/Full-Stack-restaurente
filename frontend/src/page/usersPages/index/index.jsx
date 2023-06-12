import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import { Produtos } from '../produtos/produtos';

import { Pedidos } from '../pedidos/pedidos';
import { Funcionarios } from '../funcionarios/funcionarios';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';


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

const MenuFooter = styled.div`
  width: 100vw;
  height: 90px;
  background-color: black;
  position: fixed;
  bottom: 0%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  align-content: center;
  font-size: 2em;
  

`
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

const IconsNav = styled.div`
  color: #c7b26e;

`;







export const UserIndex = () => {
    
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
                    <MenuFooter>
                        <IconsNav onClick={() => linkPaginas(1)}><AiFillHome /></IconsNav>
                        <IconsNav onClick={() => linkPaginas(2)}><BsFillCartFill /></IconsNav>
                        <IconsNav onClick={() => linkPaginas(3)}><BsFillBasket3Fill /></IconsNav>
                        <IconsNav onClick={() => linkPaginas(4)}><BsFillPersonFill/></IconsNav>
                    </MenuFooter>
                    
                    {returnPages()}
                    
                </Container>
            </>
        )
}
