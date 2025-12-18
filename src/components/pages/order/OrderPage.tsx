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
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  // lifting the state up ( remonter letat de 2 composants dans leur parent le plus proche : ici OrderPage)
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState<ProductForm>(EMPTY_PRODUCT);

  // comportement pour ajouter un produit au menu
  const handleAdd = (newProducttoAdd: ProductForm) => {
    const menuProduct: MenuItem = convertProductFormToMenuItem(newProducttoAdd);
    const menuCopy: MenuItem[] = deepClone(menu);
    const updatedMenu = [menuProduct, ...menuCopy];
    setMenu(updatedMenu);
  };

  // comportement pour supprimer un produit du menu
  const handleDelete = (productId: string) => {
   const menuCopy: MenuItem[] = deepClone(menu)
    // const menuCopy = [...menu];// shalow copy suffit
    const updatedMenu = menuCopy.filter((product) => product.id !== productId);
    setMenu(updatedMenu);
  };

  // comportement pour mettre a  jour modifier un produit au menu
  const handleEdit = (productBeingEdited: ProductForm) => {

    const menuCopy: MenuItem[] = deepClone(menu);
    // trouver le produit qui a lid le meme que celui qui est en train detre modifie
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    
    if (indexOfProductToEdit !== -1) {
      const editedProduct: MenuItem =convertProductFormToMenuItem(productBeingEdited);
      menuCopy[indexOfProductToEdit] = editedProduct; // remplacer le produit
      setMenu(menuCopy)
    }
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
    handleEdit,
  
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
