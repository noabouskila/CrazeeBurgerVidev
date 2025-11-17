import { Link , useParams} from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";
import { FaRegUserCircle } from "react-icons/fa";


export default function OrderPage() {

    const { username } = useParams();
    

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
         
          <Link to={`/orderPage/${username}`} className="logo">
            <Logo />
          </Link>

          <div className="connexion">
            <div className="user-info">
              <h1>
                Hey, <span> {username}</span>
              </h1>
              <Link to="/" className="logout-link">
                {/* <button>Se deconnecter</button> */}
                se deconnecter
              </Link>
            </div>

            <FaRegUserCircle className="icon" />
          </div>
        </div>

        <div className="main">main</div>
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

  .logo {
    margin-left: 15px;
    transform: scale(0.45);
  }

  .container {
    background-color: ${theme.colors.white};
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};

    .navbar {
      height: 10vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 70px;
      padding-left: 20px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      .connexion {
        display: flex;
        align-items: center;
        color: ${theme.colors.greyDark};

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: center;

          h1 {
            font-family: Open Sans;
            font-weight: 400;
            font-size: 16px;
            margin: 0;
            span {
              color: ${theme.colors.primary};
            }
          }
          .logout-link {
            color: ${theme.colors.greyDark};
            font-size: 10px;
          }
        }

        .icon {
          width: 36px;
          height: 36px;
          margin-left: 10px;
        }
      }
    }
    .main {
      flex: 1;
      box-shadow: 0px 8px 20px 8px #00000033 inset;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
`;

 
