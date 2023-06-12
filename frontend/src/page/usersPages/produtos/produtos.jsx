import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import UserMostrarTodos from '../../../components/user/mostrarTodos/mostrarTodos';
import Bebidas from '../../../components/bebidas/bebida';
import Comida from '../../../components/comidas/comida';
import Entrada from '../../../components/entradas/entradas';
import AddNewFood from '../../../components/addNewFood/addNewFood';
import logo from "../../../public/gericht.png";

//importando os icons da pagina
import { AiOutlinePlus } from 'react-icons/ai';


const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: calc(100vh - 90px);
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
  width: 90vw;
  overflow-x: scroll;
  height: auto;
  display: block;
  flex-direction: column;
  align-items: start;
  color: white;
  margin-bottom: 50px;
`;
const Nav = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  color: #d2c69e;
`;

const Logo = styled.img`
    width: 180px;
    margin-top: 20px;
`;

const Add = styled.div`
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    font-size: 1.8em;
    color: #d2c69e;
    padding: 0px 25px;
     
`


const IconsHome = styled.div`
    background-color: black;
    border: 1px solid silver;
    width: 75px;
    height: 40px;
    display: grid;
    align-items: center;
     
`





export const Produtos = () => {
    
    const [tela, setTela] = useState(1)

    
    const linkPaginas = (e) =>{
        setTela(e)
    }

    const returnPages = () => {
        if(tela == 1) {
            
            return <UserMostrarTodos />
        } else if (tela == 2){
            return <Bebidas/>
        } else if (tela == 3){
            return <Comida/>
        } else if (tela == 4){
            return <Entrada/>
        } else if (tela == 5){
            return <AddNewFood/>
        }
    
    }
    

        return(
            <>
                <Container>
                    <Box>
                        <div>
                            <Logo src={logo} alt="" />
                        </div>
                        <Nav>
                            <IconsHome onClick={() => linkPaginas(1)}>todos</IconsHome>
                            <IconsHome onClick={() => linkPaginas(2)}>Bebidas</IconsHome>
                            <IconsHome onClick={() => linkPaginas(3)}>Comidas</IconsHome>
                            <IconsHome onClick={() => linkPaginas(4)}>Entradas</IconsHome>
                        </Nav>
                        
                        {/* aonde as paginas vão ser carregadas */}
                        {returnPages()}
                    </Box>
                    
                    
                </Container>
            </>
        )
}
