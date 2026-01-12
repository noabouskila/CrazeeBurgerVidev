
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { convertMenuItemToProductForm } from "../../../../../utils/productUtils";
import { checkIsProductSelected } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/products";

const DEFAULT_IMAGE = "/public/assets/coming-soon.png";
export default function Menu() {
  // state
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected  , productSelected ,isCollapse, setIsCollapse ,currentTabSelected,  setCurrentTabSelected , titleEditRef} = useContext(OrderContext);

  const [shouldFocusInput, setShouldFocusInput] = useState(false);


  // comportement pour modifier le menu
  const handleUpdate =   (productId: string) => {
    // ne rien faire si on n'est pas en mode admin
    if (!isModeAdmin) return;

    // ouvrir le menu
    setIsCollapse(true);

    // trouver le produit cliqué dans le menu
    const productSelectedOnClick = menu.find((item) => item.id === productId);
    if (!productSelectedOnClick) return;

    setProductSelected(convertMenuItemToProductForm(productSelectedOnClick));

    // sélectionner l'onglet "edit"
    setCurrentTabSelected("edit");

    // signaler que le focus doit se faire
    setShouldFocusInput(true);
  };

  useEffect(() => {
    if (shouldFocusInput && isCollapse && currentTabSelected === "edit")
      // focus sur linput du titre
      titleEditRef.current?.focus();

    // reset le flag pour ne pas refocus à chaque render
    setShouldFocusInput(false);
  }, [shouldFocusInput , isCollapse, setCurrentTabSelected]);



  const handleCardOnDelete = (event: React.MouseEvent<HTMLElement>  , id: string ) => {
    event.stopPropagation();
    handleDelete(id);



    // Si le produit supprimé est celui qui est sélectionné, réinitialiser productSelected
    if (productSelected?.id === id) {
      setProductSelected(EMPTY_PRODUCT); 
     
    }
    // persister le focus de la card  du titre après suppression dune autre card
    setShouldFocusInput(true);
  };


  // affichage
  if (menu.length === 0) {
    return isModeAdmin ? (
      <EmptyMenuAdmin onResetMenu={resetMenu} />
    ) : (
      <EmptyMenuClient />
    );
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          id={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          leftDescription={formatPrice(price)}
          hasDeleteButton={isModeAdmin}
          onDelete={(event) => handleCardOnDelete(event , id)}
          onClick={() => handleUpdate(id)}
          isHoverable={isModeAdmin}
          isSelected={checkIsProductSelected(id, productSelected.id)}
        />
      ))}
    </MenuStyled>
  );
}

export const MenuStyled = styled.section`
  /* mettre autant de collonnes tant que ca rentre  tant que ca respecte la condition de minmax*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
`;
