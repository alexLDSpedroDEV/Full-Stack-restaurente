import React, {useEffect,useState}from 'react'
import styled from 'styled-components'
import bg from '../../../public/bg.png'
import Editar from '../../../components/editar/editar'
import axios from 'axios'
import Delete from '../../../components/delete/delete'


//importando os icons da pagina
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiGridSmall } from 'react-icons/bi';



const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: url(${bg});
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: start;
  color: white;
`;


const Box = styled.div`
  width: calc(100vw - 450px);
  height: auto;
  min-height: calc(100vh - 100px);
  display: inline;
  
  color: white;
  border: 1px solid white;

`;
const Title = styled.h1`
    font-size: 2em;
    color: #d2c69e;
`
const Grades = styled.div`
  width: calc(100vw - 400px);
  height: 100px;
  display: flex;

  align-items: center;
  justify-content: space-around;
  color: white;
  margin-bottom: 50px;

`;

const Texts = styled.p`
    text-align: center;
    width: 250px;
`

const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 40px;
    align-items: center;
`

const Add = styled.div`
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    font-size: 2em;
    color: #d2c69e;
    padding: 10px 25px;
     
`
const All = styled.div`
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    font-size: 2.8em;
    color: #d2c69e;
    padding: 4px 25px;
     
`
const Del = styled.div`
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    font-size: 2em;
    
    padding: 14px 40px;
     
`
const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    
     
`





export const Funcionarios = () => {


    const [isVisible, setIsVisible] = useState(true);
    
    const [tela, setTela] = useState()

    const [dados, setDados] = useState([])

   
    


    const hendlesDb = async () => {
        try{
            const funconarios = await axios.get('http://localhost:8080/login/admin/funcionarios')
            console.log(funconarios)
            setDados(funconarios.data)

        } catch (err) {
            console.log(err)
        }
        
    }
    
    useEffect(() => {
        const interval = setInterval(hendlesDb, 2000); // Faz a requisição a cada 2 segundos

        return () => {
            clearInterval(interval);
        };
    }, []);

    

    const linkPaginas = (e) =>{
        setTela(e)
        
        
    }   
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

    const returnPages = () => {
        if(tela == 1) {
            
            return <Editar />
        } 
    
    }
    
        return( 
            <>
                <Container>
                    <BoxHeader>
                        <Title>Quadro de funcionarios</Title>
                        <ContainerIcons>
                            <Add onClick={() => linkPaginas(1)}><AiOutlineUserAdd/></Add>
                            <All onClick={() => linkPaginas(0)}><BiGridSmall/></All>
                        </ContainerIcons>
                        
                    </BoxHeader>
                    {returnPages()}
                    <Box>
                        
                        {dados.map(Funcionarios => (
                            <Grades key={Funcionarios._id}>
                                <Texts>{Funcionarios.name}</Texts>
                                <Texts>{Funcionarios.email}</Texts>
                                <Texts>{Funcionarios.cargo}</Texts>
                                <Del><Delete dado={Funcionarios._id}/></Del>
                                
                            </Grades>
                        ))}
                    </Box>
                    
                    
                </Container>
            </>
        )
}
