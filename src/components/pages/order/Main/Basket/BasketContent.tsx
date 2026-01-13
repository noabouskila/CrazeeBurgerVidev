import styled from "styled-components";
import type { BasketItem } from "../../../../../types/types";
import EmptyBasket from './EmptyBasket';
import BasketCard from "./BasketCard";



export default function BasketContent({ basket }: { basket: BasketItem[] }) {

  const DEFAULT_IMAGE = "/public/assets/coming-soon.png";

  {
    if (basket.length === 0) return <EmptyBasket />;
  }

  return (
    <BasketContentStyled>
      {basket.map(({ id, title, imageSource, price, quantity }) => (
        <BasketCard
          key={id}
          id={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          price={price}
          quantity={quantity}
        />
      ))}
    </BasketContentStyled>
  );
}

export const BasketContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;
