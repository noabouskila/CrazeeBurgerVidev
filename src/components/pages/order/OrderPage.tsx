import { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";
import type { ProductForm } from "../../../types/types";
import { EMPTY_PRODUCT } from "../../../enums/products";

import { useMenuProducts } from "../../../hooks/useMenuProducts";
import { useBasket } from "../../../hooks/useBasket";

export default function OrderPage() {
  // lifting the state up ( remonter letat de 2 composants dans leur parent le plus proche : ici OrderPage)
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
 
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState<ProductForm>(EMPTY_PRODUCT);
  const titleEditRef = useRef<HTMLInputElement | null>(null);

 
  // customs hooks
  const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenuProducts();
  const {basket} = useBasket();


  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,

    isCollapse,
    setIsCollapse,

    currentTabSelected,
    setCurrentTabSelected,

    menu,
    handleAdd,
    handleDelete,
    handleEdit,

    resetMenu,

    newProduct,
    setNewProduct,

    productSelected,
    setProductSelected,

    titleEditRef,

    basket
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

export const OrderPageStyled = styled.section`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background-color: ${theme.colors.white};
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
