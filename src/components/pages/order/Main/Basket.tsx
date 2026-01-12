import styled from 'styled-components';
import { theme } from '../../../../theme';
import { FaHeart } from 'react-icons/fa';

export default function Basket() {
  return (
    <BasketStyled>
      <div className="basket-header">
        <p>Total</p>
        <p>0.00 €</p>
      </div>

      <div className='basket-content'>
        <p>Votre Commande est vide</p>
      </div>

      <div className="basket-footer">
        <p>
          Codé avec{" "}
          <span>
            <FaHeart/>
          </span>{" "}
          et React | TS
        </p>
      </div>
    </BasketStyled>
  );
}



export const BasketStyled = styled.section`
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  height: 89vh;
  

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position : sticky;
  top: 0;

  
  

  .basket-header {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    height: 40px;
  }
  .basket-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .basket-footer {
    font-size: ${theme.fonts.size.P2};
    text-align: center;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};

    svg {
      color: ${theme.colors.red};
    }
  }
`;
