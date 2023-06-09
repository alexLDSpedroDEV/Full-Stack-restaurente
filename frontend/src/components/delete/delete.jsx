import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { MdDeleteOutline } from 'react-icons/md';

/* estilizaçõa do Styled-components */
const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: auto;
  width: 450px;
  height: 60px;
  margin-top: 100px;
`;
const Container = styled.div`
  width: calc(100vw - 450px);
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: start;
  color: white;
`;

const FormNewFuncionario = styled.form`
    width: calc(100vw - 450px);
    height: auto;
    display: grid;
    justify-content: center;
`;


const Title = styled.h1`
    font-size: 2em;
    color: white;
    text-transform: uppercase; 
`;

const Input = styled.input`
    width: 400px;
    padding: 10px 20px;

`;

const Label = styled.label`
    display: block;
    padding: 20px 0px;
    font-size: 1em;
    color: white;

`;

const DivForm = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 500px;
    margin: auto;
`;





export default class Delete extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          deletado: false
        };
      }
    
      
      handleDelete = (e) => {
        axios
          .delete(`http://localhost:8080/login/funcionarios/produto/` + e ) // Substitua pela URL correta para o endpoint DELETE
          
          .then((response) => {
            // Atualizar o estado para indicar que o documento foi excluído com sucesso
            this.setState({ deletado: true });
            console.log("Deletado")
            
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
    
    render() {
        const { dado } = this.props

        const { deletado } = this.state
        
        return(

            <div>
                {
                    deletado == true ? "" : <MdDeleteOutline onClick={() => this.handleDelete(dado)}/> 
                }

            </div>
        )
    }
}