import styled from 'styled-components';
import bg from '../public/bg.png'


export const Container = styled.div` 
    width:  90vw;
    height: auto;
    min-height: calc(100vh - 100px);
    overflow-x: hidden;
    margin: auto;
    display: grid;
    
    align-items: top;
    justify-content: space-between;
    grid-template-columns: 30% 30% 30%;

`;

export const Box = styled.div`

  height: auto;
  min-height: 250px;
  width: 155px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: auto;
  margin-bottom: 70px;

`;

export const Img = styled.img`
  width:  155px;
  height: 120px;
  max-height: 150px;
`;

export const Title = styled.p`
  font-size: 1.3em;
  text-align: center;
  color: #c7b26e;
  height: 65px;
  display: grid;
  align-items: center;
`;
export const SubTitle = styled.p`
  font-size: 1.1em;
`;

export const Buy = styled.button`
  
  width: auto;
  height: 50px;
  background-color: #c7b26e;
  margin-top: 5px;
  color: white;
`;

export const MenuFooter = styled.div`
  width: 100vw;
  height: 80px;
  background-color: black;
  position: fixed;
  bottom: 0%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-items: center;
  align-content: center;
  font-size: 1.6em;
`;
