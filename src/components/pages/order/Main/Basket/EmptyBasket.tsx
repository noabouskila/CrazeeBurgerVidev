

export default function EmptyBasket() {

  const {isLoadingMenu} = useContext(OrderContext);

  const basketEmptyMessage = "Votre commande est vide.";
  
  return (
    <EmptyBasketStyled>
      <span className="empty-message"> 
        { isLoadingMenu ? <Spinner label="Chargement du panier..." color="#ff6600" /> : basketEmptyMessage}
      </span>
    </EmptyBasketStyled>
  );
}

import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import Spinner from '../../../../reusable-ui/Spinner';

export const EmptyBasketStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
`;

