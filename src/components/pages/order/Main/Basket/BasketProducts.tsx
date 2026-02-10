import styled from "styled-components";
import BasketCard from "./BasketCard";
import { DEFAULT_IMAGE } from "../../../../../enums/products";
import { findObjectById } from "../../../../../utils/array";
import { createRef, useContext, useRef } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { checkIsProductSelected } from "../Menu/helper";
import {TransitionGroup, CSSTransition} from "react-transition-group";



export default function BasketProducts() {

  const {
    menu,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    selectProductForEdit,
    productSelected,
    username
  } = useContext(OrderContext);

  const nodeRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});

  const handleOnDelete = (e: React.MouseEvent<HTMLDivElement> , id: string ,username : string ) => {
    e.stopPropagation()
    handleDeleteBasketProduct(id ,username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(menu, basketProduct.id);
          if (!menuProduct) return null;

          if (!nodeRefs.current[basketProduct.id]) {
            nodeRefs.current[basketProduct.id] =
              createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
          }

          const nodeRef = nodeRefs.current[basketProduct.id];

          return (
            <CSSTransition
              key={basketProduct.id}
              timeout={500}
              classNames={"animation"}
              nodeRef={nodeRef}
              appear={true} // animation au montage du composant
              
            >
              <div className="basket-card" ref={nodeRef}>
                <BasketCard
                  id={menuProduct.id}
                  title={menuProduct.title}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : DEFAULT_IMAGE
                  }
                  price={menuProduct.price}
                  quantity={basketProduct.quantity}
                  onDelete={(e) =>
                    handleOnDelete(e, basketProduct.id, username)
                  }
                  isModeAdmin={isModeAdmin}
                  onClick={() => selectProductForEdit(basketProduct.id)}
                  isSelected={checkIsProductSelected(
                    basketProduct.id,
                    productSelected.id,
                  )}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
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
    /* transition: all 0.5s ease; */
  }

  /* Animation CSS classes */
  /* Apparition au montage */
  .basket-card.animation-appear {
    transform: translateX(100%);
    opacity: 0;
  }

  .basket-card.animation-appear-active {
    transform: translateX(0);
    opacity: 1;
    transition:
      0.5s ease,
      opacity 2s ease;
  }

  /* Pour les entrées normales */
  .basket-card.animation-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .basket-card.animation-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition:
      0.5s ease,
      opacity 0.8s ease;
  }

  /* Sortie */
  .basket-card.animation-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .basket-card.animation-exit-active {
    opacity: 0;
    transition: all 0.5s ease;
    transform: translateX(-100%);
  }
`;
