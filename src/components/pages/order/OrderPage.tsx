import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";

import type { MenuItem } from "../../../types";
import { fakeMenu } from "../../../data/fakeMenu";

export default function OrderPage() {
  // lifting the state up ( remonter letat de 2 composants dans leur parent le plus proche : ici OrderPage)
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.LARGE);

  
  // comportement pour ajouter un produit au menu
  const handleAdd = (newProducttoAdd: MenuItem) => {
    const menuCopy = [...menu];
    const updatedMenu = [newProducttoAdd, ...menuCopy];
    setMenu(updatedMenu);
  };

  // comportement pour supprimer un produit du menu
  const handleDelete = (productId : number ) => {
    const menuCopy = [...menu];
    const updatedMenu = menuCopy.filter((product) => product.id !== productId);
    setMenu(updatedMenu);
  }
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
