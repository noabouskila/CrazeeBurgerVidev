
import styled from 'styled-components';
import Basket from './basket';
import Menu from './Menu';

export default function Main() {
  return (
   <MainStyled className="main">
        <Basket/>
        <Menu/>
   </MainStyled>
  )
}





export const MainStyled = styled.section`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #f5f5f7;
  padding: 50px 50px 150px;
  grid-row-gap: 60px;

    display: grid;
    grid-template-columns: 25% 75%;
  
`;



// CSS pour les cartes produit :
  //  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);