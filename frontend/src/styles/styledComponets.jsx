import styled from 'styled-components';
import bg from '../public/bg.png'


export const Container = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    
    background-image: url(${bg});
    display: grid;
    overflow: hidden;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    background-color: red;
    @media (max-width: 1200px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
       
    }
`;


export const Button = styled.button`
    background-color: #c7b26e;
    font-size: 1em;
    width: 400px;
    height: 60px;
    border-radius: 10px;
    @media (max-width: 1200px) {
        width: 500px;  
    }
    @media (max-width: 650px) {
        width: 430px; 
    }
    @media (max-width: 550px) {
        width: 380px;
    }
    @media (max-width: 460px) {
        width: 300px; 
        margin: auto;
    }

    //resposivel heigth
    @media (max-width: 460px) {
        width: 300px; 
        margin: auto;
    }
`;

export const Form = styled.form`
    width: 600px;
    height: auto;
    min-height: 800px;
    margin: auto;
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 50px;
    @media (max-width: 1200px) {
        
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 700px) {
        width: 500px;
    }
    
`;

export const Title = styled.h1`
    font-size: 3em;
    color: #d2c69e;
    @media (max-width: 650px) {
        font-size: 2.6em;
    }
    @media (max-width: 550px) {
        font-size: 2.5em;
        text-align: center;
    }
    @media (max-width: 460px) {
        font-size: 2.1em;  
    }
    @media (max-width: 460px) {
        font-size: 1.9em;  
    }
    @media (max-height: 800px) and (min-width: 1023px){
        font-size: 2.6em;
    }
`;

export const SubTitle = styled.h3`
    font-size: 1.5em;
    color: #827f7f;
    margin-top: 25px;
    margin-bottom: 40px;
    @media (max-width: 550px) {
        font-size: 1.3em;
        text-align: center;
    }
    @media (max-width: 460px) {
        font-size: 1.1em; 
    }
`;


export const TitleLink = styled.a`
    font-size: 1em;
    color: #d2c69e;
    margin-top: 25px;
    text-decoration: none;
    padding-left: 30px;
    cursor: pointer;
    @media (max-width: 460px) {
        padding-left: 10px; 
    }

`;

export const Input = styled.input`
    width: 400px;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0px solid white;
    :hover{
        border: 2px solid blue;
    }
    @media (max-width: 1200px) {
        width: 500px;  
    }
    @media (max-width: 650px) {
        width: 430px; 
    }
    @media (max-width: 550px) {
        width: 380px;
    }
    @media (max-width: 460px) {
        width: 300px;
        
    }
`;

export const Label = styled.label`
    display: block;
    width: 470px;
    font-size: 1.2em;
    color: #d2c69e;
`;




export const DivForm = styled.div`
    display: grid;
    justify-content: start;
    align-content: space-around;
    height: 100px;

    @media (max-width: 550px) {
        width: 400px;
    }
    @media (max-width: 460px) {
        width: 300px;
        margin: auto;
        
    }
`;



export const BoxForms = styled.div`
    height: 350px;
    display: grid;
    align-content: space-around;
    
`;

export const BoxImg = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        display: none;
    }
`

export const ImgHome = styled.img`
    width: 500px;

    @media (max-height: 800px) and (min-width: 1023px){
        width: 400px;
    }
    @media (min-height: 1000px) and (min-width: 1850px){
        width: 650px;
    }
    @media (min-height: 1200px) and (min-width: 2050px){
        width: 700px;
    }
`