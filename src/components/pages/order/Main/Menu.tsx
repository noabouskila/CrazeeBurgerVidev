import  { useContext} from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {
  // on passe par un state car la data peut evoluer
  // const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.LARGE);
  // console.log("setMenu" , setMenu);

  
  const { menu } = useContext(OrderContext);
   
  
  return (
    <MenuStyled>
        {menu.map(({title , imageSource , price , id}) => (
          <Card
            key={id}
            id={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
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
