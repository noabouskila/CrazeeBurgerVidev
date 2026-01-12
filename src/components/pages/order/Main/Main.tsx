import styled from "styled-components";
import Basket from './Basket';
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
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

export const MainStyled = styled.section`
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  height: calc(95vh -10vh);
  background-color: ${theme.colors.background_white};

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow-y: scroll;

  .menu-and-admin {
    position: relative;
  
  }
`;
