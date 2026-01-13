import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketSection from "../../../../reusable-ui/BasketSections";
import Total from "./Total";
import { formatPrice } from '../../../../../utils/maths';
import BasketContent from "./BasketContent";
import BasketFooter from "./BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function Basket() {

   const { basket } = useContext(OrderContext);
   
  return (
    <BasketStyled>

      <BasketSection>
        <Total amountToPay={formatPrice(0)} />
      </BasketSection>

      
      <BasketContent basket={basket} />

      <BasketSection>
        <BasketFooter/>
      </BasketSection>
    </BasketStyled>
  );
}

export const BasketStyled = styled.section`
  font-family: ${theme.fonts.family.stylish};
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  height: 89vh;
  /* width : 350px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;

  
`;
