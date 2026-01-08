import { useContext } from "react";
import styled from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { convertMenuItemToProductForm } from "../../../../../utils/productUtils";
import { checkIsProductSelected } from "./helper";

const DEFAULT_IMAGE = "/public/assets/coming-soon.png";
export default function Menu() {
  // state
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected  , productSelected} = useContext(OrderContext);


  // comportement pour modifier le menu
  const handleUpdate = (productId: string) => {
    if(!isModeAdmin) return;
    const productSelectedOnClick = menu.find((item) => item.id === productId);
    if (!productSelectedOnClick) return;

    setProductSelected(convertMenuItemToProductForm(productSelectedOnClick));
  };


  const handleCardOnDelete = (event: React.MouseEvent<HTMLElement>  , id: string ) => {
    event.stopPropagation()
    handleDelete(id)
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
