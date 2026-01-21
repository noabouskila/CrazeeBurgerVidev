import Button from "./Button";

import type { ProductProps } from "../../types/types";
import { theme } from "../../theme";
import styled, { css } from "styled-components";
import { TiDelete } from "react-icons/ti";

export default function Card({
  id,
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd
}: ProductProps) {
  return (
    <CardStyled
      key={id}
      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            onClick={onDelete}
            className="delete-button"
            type="button"
            aria-label="delete-button"
          >
            <TiDelete className="icon" />
          </button>
        )}

        <div className="image">
          <img src={imageSource} alt={`Menu item ${id}`} />
        </div>

        <div className="info-text">
          <h3 className="title">{title}</h3>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <Button label={"Ajouter"} version="littlePrimary" 
              onClick={onAdd}/>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

export const CardStyled = styled.div<{ $isHoverable?: boolean; $isSelected?: boolean }>`
  border-radius: ${theme.borderRadius.extraRound};

  .card {
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    box-sizing: border-box;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: -8px 8px 20px 0px #00000033;

    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    position: relative;

    .delete-button {
      color: ${theme.colors.primary};
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      z-index: 2;
      border: none;
      background: none;

      .icon {
        width: 30px;
        height: 30px;
      }

      :hover {
        color: ${theme.colors.red};
      }
      :active {
        color: ${theme.colors.primary};
      }
    }

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
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};
        }
      }
    }
  }

  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}
`;


const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-in-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  .card {
    background-color: ${theme.colors.primary};

    .right-description > button {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
        transition: all 200ms ease-out;
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }

      &.is-disabled {
        background-color :yellow ;
        opacity: 50%;
        cursor: not-allowed;
        z-index: 2;
      }

      &.white-focus {
        border: 1px solid ${theme.colors.white};
        /* background-color: ${theme.colors.white}; */
        background-color: pink;
        color: ${theme.colors.primary};
        :hover {
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.white};
        }
        :active {
          background-color: ${theme.colors.white};
          color: ${theme.colors.primary};
        }
      }
    }

    .delete-button {
      color: ${theme.colors.white};
      :active {
        color: ${theme.colors.white};
      }
    }

    .info-text {
      .description {
        .left-description {
          color: ${theme.colors.white};
        }
      }
    }
  }
`;
