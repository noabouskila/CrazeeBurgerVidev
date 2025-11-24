import { useState } from 'react';
import styled from 'styled-components';
import type { MenuItem } from '../../../../types';
import { fakeMenu2 } from '../../../../data/fakeMenu';
import { theme } from '../../../../theme';
import PrimaryButton from '../../../reusable-ui/PrimaryButton';
import { formatPrice } from '../../../../utils/maths';



export default function Menu() {

  // on passe par un state car la data peut evoluer 
 const [menu, setMenu] = useState<MenuItem[]>(fakeMenu2);

  return (
    <MenuStyled>
      <div className="cards-container">
        {menu.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imageSource} alt={`Menu item ${item.id}`} />
            <div className="info-text">
              <h3>{item.title}</h3>
              <div className="description">
                <span className="price">{formatPrice(item.price)}</span>
                <PrimaryButton
                  label="Ajouter"
                  className="primary-button-menu"
                />
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
  }

  .card {
    width: 240px;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: -8px 8px 20px 0px #00000033;

    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
    }

    .info-text {
      width: 200px;
      height: 110px;

      h3 {
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.fonts.weights.bold};
        font-size: 36px;
        margin: 10px 0;
      }

      .description {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
          font-size: ${theme.fonts.size.P0};
          color: ${theme.colors.primary};
        }

        .primary-button-menu {
          width: 95px;
          height: 38px;
        }
        .primary-button-menu:hover {
          border: solid 1px ${theme.colors.primary};
        }
      }
    }
  }
`;

