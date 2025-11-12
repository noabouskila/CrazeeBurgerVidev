
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
  display: flex;
  align-items: center;
  margin-bottom: 3%;
  transform: scale(2.5);

  img {
    /* width: 200px;
    height: 150px; */
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }

  span {
    color: ${theme.colors.primary};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P4};
    line-height: 0px;
    letter-spacing: 1.5px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
  }
`;