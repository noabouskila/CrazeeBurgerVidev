import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled className="titleLogin">
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous </h2>
    </WelcomeStyled>
  );
}

export const WelcomeStyled = styled.div`
 
    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.P5};
    }

    hr {
      border: none; /* supprime le style par défaut */
      height: 2px;
      background-color: ${theme.colors.loginLine};
      margin-bottom: ${theme.gridUnit * 5}px;
    }

    h2 {
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.P4};
      text-align: center;
      margin: 10px 10px 10px;
    }

`;
