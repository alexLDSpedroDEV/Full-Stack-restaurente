import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import { Produtos } from '../produtos/produtos';
import UserCarrinho from '../../../components/user/carrinho/carrinho';
import { Pedidos } from '../pedidos/pedidos';
import { Funcionarios } from '../funcionarios/funcionarios';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { Container } from '../../../styles/styledComponetsUsers';
import { MenuFooter } from '../../../styles/styledComponetsUsers';




const IconsNav = styled.div`
  color: #c7b26e;

`;







export const UserIndex = () => {
    
    const [tela, setTela] = useState(1)

    
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
                        {/* procurar pedidos */}
                        <IconsNav onClick={() => linkPaginas(3)}><AiOutlineSearch /></IconsNav>
                        
                        {/* menu principal */}
                        
                        <IconsNav onClick={() => linkPaginas(1)}><AiFillHome /></IconsNav>
                        {/* carrinho */}
                        
                        <IconsNav onClick={() => linkPaginas(2)}><BsFillCartFill /></IconsNav>
                        
                    </MenuFooter>
                    
                    {returnPages()}
                    
                </Container>
            </>
        )
}
