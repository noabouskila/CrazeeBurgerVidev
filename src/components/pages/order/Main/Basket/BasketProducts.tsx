import styled from "styled-components";
import type { BasketItem } from "../../../../../types/types";
import BasketCard from "./BasketCard";



export default function BasketProducts({ basket }: { basket: BasketItem[] }) {

 

  return (
    <BasketProductsStyled>
      {basket.map(({ id, title, imageSource, price, quantity }) => (

        <div className="basket-card">
          <BasketCard
            key={id}
            id={id}
            title={title}
            imageSource={imageSource}
            price={price}
            quantity={quantity}
          />
        </div>
      ))}
    </BasketProductsStyled>
  );
}

export const BasketProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  .basket-card {
    margin: 16px 20px;
  }
`;
