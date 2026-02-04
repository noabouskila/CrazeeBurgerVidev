import styled from "styled-components";
import Basket from "./Basket/Basket";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled className="main">
      <Basket />

      <div className="menu-and-admin">
        <div className="menu">
          <Menu />
        </div>
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

export const MainStyled = styled.section`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  height: calc(95vh -10vh);
  background-color: ${theme.colors.background_white};

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow-y: scroll;

  /* Masquer la scrollbar sur Chrome, Safari et Edge */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Masquer la scrollbar sur Firefox */
  scrollbar-width: none;

  .menu-and-admin {
    position: relative;
    box-shadow: ${theme.shadows.strong};
    .menu {
      /* min-height: 100%; */
    }
  }
`;
