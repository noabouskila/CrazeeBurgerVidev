import styled from "styled-components";
import type {  BasketItem } from "../../../../../types/types";
import BasketCard from "./BasketCard";
import { DEFAULT_IMAGE } from "../../../../../enums/products";



export default function BasketProducts({
  basket,
  isModeAdmin,
  handleDeleteBasketProduct,
}: {
  basket: BasketItem[];
  isModeAdmin : boolean;
  handleDeleteBasketProduct : (id: string) => void;  
}) {
  const handleOnDelete = (id: string) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map(({ id, title, imageSource, price, quantity }) => (
        <div className="basket-card" key={id}>
          <BasketCard
            id={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            price={price}
            quantity={quantity}
            onDelete={() => handleOnDelete(id)}
            isModeAdmin={isModeAdmin}
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
