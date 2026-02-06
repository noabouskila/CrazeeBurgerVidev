
import { useContext } from "react";
import styled from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

import { checkIsProductSelected } from "./helper";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../../enums/products";
import { findObjectById, isEmpty } from "../../../../../utils/array";
import Spinner from "../../../../reusable-ui/Spinner";


export default function Menu() {
  // state
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    handleAddToBasket,
    selectProductForEdit,
    setShouldFocusInput,
    username ,
    isLoading
  } = useContext(OrderContext);




  const handleCardOnDelete = (event: React.MouseEvent<HTMLElement>  , id: string ) => {
    event.stopPropagation();
    handleDelete(id , username);


    // Si le produit supprimé est celui qui est sélectionné, réinitialiser productSelected
    if (productSelected?.id === id) {
      setProductSelected(EMPTY_PRODUCT); 
    }
    // persister le focus de la card  du titre après suppression dune autre card
    setShouldFocusInput(true);
  };



  // affichage
  if (isLoading) {
    return <Spinner label="Chargement du menu..." color="#ff6600"  />;
  }

    if (isEmpty(menu)) {
      return isModeAdmin ? (
        <EmptyMenuAdmin onResetMenu={()=>resetMenu(username)} />
      ) : (
        <EmptyMenuClient />
      );
    }

  const handleAddButton = (event: React.MouseEvent<HTMLElement>  , id: string) => {
    event.stopPropagation();
    const productToAdd = findObjectById(menu , id);
    if (!productToAdd) return;

    handleAddToBasket(productToAdd , username);
  };



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
          onDelete={(event) => handleCardOnDelete(event, id)}
          onClick={() => selectProductForEdit(id)}
          isHoverable={isModeAdmin}
          isSelected={checkIsProductSelected(id, productSelected.id)}
          onAdd={(event) => handleAddButton(event, id)}
        />
      ))}
    </MenuStyled>
  );
}

export const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* mettre autant de collonnes tant que ca rentre  tant que ca respecte la condition de minmax*/
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
`;