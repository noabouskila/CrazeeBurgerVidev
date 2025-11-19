import styled from 'styled-components';
import { Link } from "react-router-dom";
import NavBarRightSide from './NavBarRightSide';
import Logo from '../../reusable-ui/Logo';

export default function Navbar({username}: {username: string}) {

    return (
        <NavbarStyled>
        
            <Link to={`/orderPage/${username}`} className="logo">
                <Logo />
            </Link>
    
            <NavBarRightSide username={username} />

      </NavbarStyled>
    );
}


export const NavbarStyled = styled.nav`
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    .logo{
        cursor: pointer;
    }
`;





    
