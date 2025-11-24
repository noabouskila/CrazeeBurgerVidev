import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";
import type { MenuItem } from "../../../../types";
import { theme } from "../../../../theme";
import styled from "styled-components";

export default function Product({id ,title, imageSource, price}: MenuItem) {
  return (
    <ProductStyled key={id} >
      <img src={imageSource} alt={`Menu item ${id}`} />
      <div className="info-text">
        <h3>{title}</h3>
        <div className="description">
          <span className="price">{formatPrice(price)}</span>
          <PrimaryButton label="Ajouter" className="primary-button-menu" />
        </div>
      </div>
    </ProductStyled>
  );
}


export const ProductStyled = styled.div`
  
    width: 240px;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: -8px 8px 20px 0px #00000033;

    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
    }

    .info-text {
      width: 200px;
      height: 110px;

      h3 {
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.fonts.weights.bold};
        font-size: 36px;
        margin: 10px 0;
      }

      .description {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
          font-size: ${theme.fonts.size.P0};
          color: ${theme.colors.primary};
        }

        .primary-button-menu {
          width: 95px;
          height: 38px;
        }
        .primary-button-menu:hover {
          border: solid 1px ${theme.colors.primary};
        }
      }
    }
  
`;
