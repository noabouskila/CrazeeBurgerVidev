
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyMenuClient() {
  return (
   <EmptyMenuClientStyled>
        <p className='menu-vide'>VICTIME DE SON SUCCES! :D</p>
        <p>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION.</p>
        <p>A TRES VITE !</p>
    </EmptyMenuClientStyled>
  )
}


export const EmptyMenuClientStyled = styled.section`
  font-family: "Amatic SC";
  font-style: Bold;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .menu-vide {
    font-weight: ${theme.fonts.weights.bold};
  }
`;


