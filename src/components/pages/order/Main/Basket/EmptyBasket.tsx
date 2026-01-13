

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">Votre commande est vide.</span>
    </EmptyBasketStyled>
  );
}

import styled from 'styled-components';
import { theme } from '../../../../../theme';

export const EmptyBasketStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
`;

