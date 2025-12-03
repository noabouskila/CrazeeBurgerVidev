import { useContext } from "react";
import styled from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/public/assets/coming-soon.png";
export default function Menu() {
  const { menu, isModeAdmin, handleDelete } = useContext(OrderContext);

  if (menu.length === 0) {
    return  isModeAdmin ? <EmptyMenuAdmin/> : <EmptyMenuClient/>
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
          onDelete={() => handleDelete(id)}
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
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
