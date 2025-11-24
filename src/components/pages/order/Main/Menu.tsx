import { useState } from "react";
import styled from "styled-components";
import type { MenuItem } from "../../../../types";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  // on passe par un state car la data peut evoluer
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu2);
  console.log(setMenu);

  return (
    <MenuStyled>
      <div className="cards-container">
        {menu.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            imageSource={item.imageSource}
            leftDescription={formatPrice(item.price)}
          />
        ))}
      </div>
    </MenuStyled>
  );
}

export const MenuStyled = styled.section`
  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
  }
`;
