import { Link , useParams} from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../../theme";


export default function OrderPage() {

    const { username } = useParams();
    

  return (
    <OrderPageStyled>
      <div className="container">
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Deconnexion</button>
        </Link>
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
  }
`;

 
