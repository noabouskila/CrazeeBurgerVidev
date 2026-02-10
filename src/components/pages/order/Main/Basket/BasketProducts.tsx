import styled from "styled-components";
import BasketCard from "./BasketCard";
import { DEFAULT_IMAGE } from "../../../../../enums/products";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { checkIsProductSelected } from "../Menu/helper";




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



  const handleOnDelete = (e: React.MouseEvent<HTMLDivElement> , id: string ,username : string ) => {
    e.stopPropagation()
    handleDeleteBasketProduct(id ,username);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(menu, basketProduct.id);
       
        if (!menuProduct) {
          // If the menu item can't be found, skip rendering this basket entry
          return null;
        }

        return (
          <div className="basket-card" key={basketProduct.id}>
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
              onDelete={(e) => handleOnDelete(e, basketProduct.id , username)}
              isModeAdmin={isModeAdmin}
              onClick={() => selectProductForEdit(basketProduct.id)}
              isSelected={checkIsProductSelected(basketProduct.id,productSelected.id
              )}
            />
          </div>
        );
      })}
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
