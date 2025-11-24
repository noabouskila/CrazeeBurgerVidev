import PrimaryButton from "./PrimaryButton";

import type { ProductProps } from "../../types";
import { theme } from "../../theme";
import styled from "styled-components";

export default function Card({
  id,
  title,
  imageSource,
  leftDescription,
}: ProductProps) {
  return (
    <ProductStyled key={id}>
      <div className="image">
        <img src={imageSource} alt={`Menu item ${id}`} />
      </div>

      <div className="info-text">
        <h3 className="title">{title}</h3>
        <div className="description">
          {/* <span className="price">{formatPrice(price)}</span>
          <PrimaryButton label="Ajouter" className="primary-button-menu" /> */}

          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

export const ProductStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px #00000033;

  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;
