
import styled from "styled-components";
import { theme } from "../../../theme";
import Profile from "./Profile";


export default function NavBarRightSide({username}: {username: string}) {
  return (
    <NavBarRightSideStyled>
        {/* <div className="admin-button">
            <button>Activer le mode Admin</button>
        </div> */}
        <Profile username={username} />
    </NavBarRightSideStyled>
  );
}



export const NavBarRightSideStyled = styled.div`

    display: flex;
    align-items: center;
    color: ${theme.colors.greyDark};
    padding-right: 50px;

   /* .admin-button > button {
        background-color: ${theme.colors.primary};
        border: none;
        border-radius: ${theme.borderRadius.round};
   } */


`;

