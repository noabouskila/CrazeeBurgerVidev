import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketSection from "../../../../reusable-ui/BasketSections";
import Total from "./Total";
import BasketFooter from "./BasketFooter";
import { useContext, useMemo } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from './BasketProducts';
import { isEmpty } from "../../../../../utils/array";


export default function Basket() {
  const {
    basket,
  } = useContext(OrderContext);
  const isBasketEmpty = isEmpty(basket);

  const sumToPay = useMemo(
    () =>
      basket.reduce(
        (total, basketProduct) =>
          total + (basketProduct.price ?? 0) * (basketProduct.quantity ?? 0),
        0,
      ),
    [basket],
  );


  return (
    <BasketStyled>
      <BasketSection>
        <Total amountToPay={(sumToPay)} />
      </BasketSection>

      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}

      <BasketSection>
        <BasketFooter />
      </BasketSection>
    </BasketStyled>
  );
}

export const BasketStyled = styled.section`
  font-family: ${theme.fonts.family.stylish};
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  /* height: 89vh; */
  height  : 804px;
  /* width : 350px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;

  
`;
