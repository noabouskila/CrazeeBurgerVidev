import styled from 'styled-components';
import { theme } from "../../../theme";
import Navbar from './Navbar';
import Main from './Main';
import { useParams } from 'react-router-dom';


export default function OrderPage() {

  const { username } = useParams(); 
  return (
    <OrderPageStyled>
      <div className="container">

        <Navbar username={username ?? ''} />
        <Main />

      </div>
    </OrderPageStyled>
  );
}




export const OrderPageStyled = styled.section`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;



  .container {
    background-color: ${theme.colors.white};
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};

  }
`;

 
