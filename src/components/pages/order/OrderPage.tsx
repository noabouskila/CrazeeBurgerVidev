import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";
import type { MenuItem, ProductForm } from "../../../types/types";
import { fakeMenu } from "../../../data/fakeMenu";
import { convertProductFormToMenuItem } from "../../../utils/productUtils";
import { EMPTY_PRODUCT } from "../../../enums/products";

export default function OrderPage() {
  // lifting the state up ( remonter letat de 2 composants dans leur parent le plus proche : ici OrderPage)
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] =useState<ProductForm>(EMPTY_PRODUCT);
  

  // comportement pour ajouter un produit au menu
  const handleAdd = (newProducttoAdd: ProductForm) => {
    const menuProduct: MenuItem = convertProductFormToMenuItem(newProducttoAdd);
    
    const menuCopy = [...menu];
    const updatedMenu = [menuProduct, ...menuCopy];
    setMenu(updatedMenu);
  };

  // comportement pour supprimer un produit du menu
  const handleDelete = (productId: string) => {
    const menuCopy = [...menu];
    const updatedMenu = menuCopy.filter((product) => product.id !== productId);
    setMenu(updatedMenu);
  };
  // comportement pour reinitialiser le menu
  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

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
    resetMenu,

    newProduct,
    setNewProduct,

    productSelected,
    setProductSelected,
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
