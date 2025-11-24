import styled from "styled-components";
import NavBarRightSide from "./NavBarRightSide";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../theme";

export default function Navbar({ username }: { username: string }) {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
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
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }
`;
