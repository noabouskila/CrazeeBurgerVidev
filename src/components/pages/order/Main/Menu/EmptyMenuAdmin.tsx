import styled from "styled-components";
import { theme } from "../../../../../theme";




export default function EmptyMenuAdmin({onResetMenu}: {onResetMenu?: () => void}) {


    return (
      <EmptyMenuAdminStyled>
        <p className="menu-vide">Le menu est vide? </p>
        <p>Cliquez ci-dessous pour les réinitialiser</p>
        <button className="button-reset-menu" onClick={onResetMenu}>
          Generer de nouveaux produits{" "}
        </button>
      </EmptyMenuAdminStyled>
    );
}



export const EmptyMenuAdminStyled = styled.section`
  font-family: "Amatic SC";
  font-style: Bold;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};

  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 20px;
  }

  .menu-vide {
    font-weight: ${theme.fonts.weights.bold};
  }

  button {
    font-family: "Arial", sans-serif;
    border: none;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};
    padding: 15px;
  }
`;

