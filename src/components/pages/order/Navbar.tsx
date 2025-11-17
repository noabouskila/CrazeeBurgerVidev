import Logo from "../../reusable-ui/Logo";
import { FaRegUserCircle } from "react-icons/fa";
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { theme } from "../../../theme";

export default function Navbar() {

    const { username } = useParams();

    return (
      <NavbarStyled>
        <Link to={`/orderPage/${username}`} className="logo">
          <Logo />
        </Link>

        <div className="connexion">
          <div className="user-info">
            <h1>
              Hey, <span> {username}</span>
            </h1>
            <Link to="/">
              <button className="logout-link">Se deconnecter</button>
              {/* se deconnecter */}
            </Link>
          </div>

          <FaRegUserCircle className="icon" />
        </div>
      </NavbarStyled>
    );
}


export const NavbarStyled = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 70px;
  padding-left: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  .logo {
    margin-left: 15px;
    transform: scale(0.45);
  }

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
        border: none;
      }
    }

    .icon {
      width: 36px;
      height: 36px;
      margin-left: 10px;
    }
  }
`;





    
