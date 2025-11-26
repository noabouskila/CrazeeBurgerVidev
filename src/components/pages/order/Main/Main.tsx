import styled from "styled-components";
// import Basket from './Basket';
import Menu from "./Menu";
import Admin from "./Admin/Admin";

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <Basket /> */}

      <div className="menu-and-admin">
        <Menu />
        <Admin />
      </div>
    </MainStyled>
  );
}

export const MainStyled = styled.section`
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: calc(95vh -10vh);

  display: grid;
  /* decommenter cette ligne quand <Basket/> activé */
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;
  overflow-y: scroll;

  .menu-and-admin {
    position: relative;
  }
`;


