import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";
import type { ProductForm } from "../../../types/types";
import { EMPTY_PRODUCT } from "../../../enums/products";
import { useMenuProducts } from "../../../hooks/useMenuProducts";
import { useBasket } from "../../../hooks/useBasket";
import { convertMenuItemToProductForm } from "../../../utils/productUtils";
import { getUser } from "../../../api/user";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";


export default function OrderPage() {
  // lifting the state up ( remonter letat de 2 composants dans leur parent le plus proche : ici OrderPage)
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
 
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState<ProductForm>(EMPTY_PRODUCT);
  const titleEditRef = useRef<HTMLInputElement | null>(null);

 
  // customs hooks
  const { menu, setMenu , handleAdd, handleDelete, handleEdit, resetMenu } = useMenuProducts();
  const {basket,handleAddToBasket,handleDeleteBasketProduct,updateBasketProductPrice, } = useBasket();

  const [shouldFocusInput, setShouldFocusInput] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { username } = useParams<{ username: string }>();
  if (!username) {
    throw new Error("Username manquant dans l’URL");
  }


  const selectProductForEdit = (productId: string) => {
    if (!isModeAdmin) return;

    // ouvrir le panneau
    setIsCollapse(true);

    // trouver le produit
    const product = menu.find((p) => p.id === productId);
    if (!product) return;

    // mettre à jour productSelected
    setProductSelected(convertMenuItemToProductForm(product));

    // sélectionner l'onglet "edit"
    setCurrentTabSelected("edit");

    // signaler le focus
    setShouldFocusInput(true);
  };

  useEffect(() => {
    if (shouldFocusInput && isCollapse && currentTabSelected === "edit")
      // focus sur linput du titre
      titleEditRef.current?.focus();

    // reset le flag pour ne pas refocus à chaque render
    setShouldFocusInput(false);
  }, [shouldFocusInput, isCollapse, setCurrentTabSelected]);

  // charger le menu de chaque user au chargement du composant
  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      const menuReceived = await getMenu(username);
      setMenu(menuReceived);
      setIsLoading(false);

   };

   fetchMenu();
 }, []);



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

    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    updateBasketProductPrice,
    selectProductForEdit,
    setShouldFocusInput,
    username,
    isLoading
  };

  // appel api firestore pour récupérer les produits
  getUser("Alex")

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
