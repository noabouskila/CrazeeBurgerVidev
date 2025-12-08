import styled from "styled-components";
// import Basket from './Basket';
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled className="main">
      {/* <Basket /> */}

      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

export const MainStyled = styled.section`
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: calc(95vh -10vh);
  background-color: ${theme.colors.background_white};

  display: grid;
  /* decommenter cette ligne quand <Basket/> activé */
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;
  overflow-y: scroll;

  .menu-and-admin {
    position: relative;
  }
`;
