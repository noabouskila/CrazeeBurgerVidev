import { theme } from "../../../../../theme";
import type {  MenuItem } from "../../../../../types/types";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";



    
export default function BasketCard({ id, title, imageSource, price, quantity }: MenuItem) {
  return (
    <BasketCardStyled key={id}>
      <div className="product-image">
        <img src={imageSource} alt="image produit panier" />
      </div>
      <div className="product-info">
        <span className="title">{title}</span>
        <span
          className="price
        "
        >
          {formatPrice(price ?? 0)}
        </span>
      </div>
      <div className="quantity">x {quantity}</div>
    </BasketCardStyled>
  );
}


export const BasketCardStyled = styled.div`
  padding: 16px 8px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.basket};
  height: calc(86px - 32px);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .product-image {
    img {
      width: 85px;
      height: 70px;
      object-fit: contain;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;

    .title {
      font-size: ${theme.fonts.size.P3};
      font-weight: ${theme.fonts.weights.bold};

      white-space: nowrap;
      overflow: hidden;
      width: 100px;
      text-overflow: ellipsis;
    }
    .price {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      font-family: ${theme.fonts.family.openSans};
    }
  }

  .quantity {
    font-family: ${theme.fonts.family.openSans};
    color: ${theme.colors.primary};
  }
`;

