import  { useContext} from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";


const DEFAULT_IMAGE = "/public/assets/coming-soon.png";
export default function Menu() {

  const { menu , isModeAdmin  , handleDelete , resetMenu} = useContext(OrderContext);

  
  if (menu.length === 0) {
      return (
        <MenuStyled>
          <span>Le menu est vide. Veuillez ajouter des produits.</span>
          <button className="button-reset-menu" onClick={resetMenu} >Generer de nouveaux produits </button>
        </MenuStyled>
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
          onDelete={() =>  handleDelete(id)}
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

  .button-reset-menu{
     
  }
`;
