import { theme } from "../../../../../theme";
import type {  BasketItem } from "../../../../../types/types";
import styled, { css } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";



    
export default function BasketCard({
  id,
  title,
  imageSource,
  price,
  quantity,
  isModeAdmin,
  onDelete,
}: BasketItem) {
  return (
    <BasketCardStyled key={id} $isModeAdmin={isModeAdmin}>
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

      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
    </BasketCardStyled>
  );
}

interface BasketCardStyledProps {
  $isModeAdmin?: boolean;
}
export const BasketCardStyled = styled.div<BasketCardStyledProps>`
  cursor: ${({ $isModeAdmin }) => ($isModeAdmin ? "pointer" : "auto")};

  padding: 16px 8px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.basket};
  height: calc(86px - 32px);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: relative;

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

  .delete-button {
    display: none;
    z-index: 1;
  }

  ${({ $isModeAdmin }) => $isModeAdmin && hoverableStyle}
`;

const hoverableStyle = css`
  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
      :hover {
        .icon {
          color: ${theme.colors.dark};
        }
        :active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`;
