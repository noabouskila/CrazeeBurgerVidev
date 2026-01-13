
export default function BasketContent() {
  return (
   
    <BasketContentStyled >
    <span>Votre commande est vide.</span>
    </BasketContentStyled>
   
  );
}

import styled from 'styled-components';
import { theme } from '../../../../../theme';

export const BasketContentStyled = styled.div`
  
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  
`;

