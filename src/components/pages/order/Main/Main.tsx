import styled from "styled-components";
// import Basket from './Basket';
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <Basket/> */}
      <Menu />
    </MainStyled>
  );
}

export const MainStyled = styled.section`
  flex: 1;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #f5f5f7;

  display: grid;
  overflow-y: scroll;
`;


