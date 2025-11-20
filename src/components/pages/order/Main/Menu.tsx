import { useState } from 'react';
import styled from 'styled-components';
import type { MenuItem } from '../../../../types';
import { fakeMenu2 } from '../../../../data/fakeMenu';
import { theme } from '../../../../theme';
// import PrimaryButton from '../../../reusable-ui/PrimaryButton';


export default function Menu() {

  // on passe par un state car la data peut evoluer 
 const [menu, setMenu] = useState<MenuItem[]>(fakeMenu2);

  return (
    <MenuStyled>
      <div className="cards-container">
        {menu.map((item) => (
          <div key={item.id} className='card'>
            <img src={item.imageSource} alt={`Menu item ${item.id}`} />
            <div className="info-text">
              <h3>{item.title}</h3>
              <div className="description">
                <span>{item.price.toFixed(2)} €</span>
                {/* <PrimaryButton label="Ajouter" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MenuStyled>
  );
}


export const MenuStyled = styled.section`
  /* background-color: blue; */

  .cards-container {
    background-color: blue;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
  }

  .card {
    background-color: yellow;
    border: solid 1px black;
    width: 240px;
    height: 330px;
    border-radius: ${theme.borderRadius.round};

    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
    }
  }
`;

