
import LogoCrazeeBurger from "/src/assets/F03 logo.png";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
        <span>CRAZEE</span>
        <img src={LogoCrazeeBurger} alt="Image du Logo de Crazee Burger" />
        <span>BURGER</span>
    </LogoStyled>
  )
}

export const LogoStyled = styled.div`
  
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;

    img {
      width: 200px;
      height: 150px;
    }

    span {
      font-family: Amatic SC;
      font-weight: 700;
      font-size: 110px;
      line-height: 0px;
      letter-spacing: 1.5px;
      text-align: center;
      vertical-align: middle;
      text-transform: uppercase;
    }

`;