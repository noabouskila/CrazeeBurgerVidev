import Basket from "./Basket/Basket";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext, useRef } from "react";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { adminAnimation } from "../../../../theme/animations";
import styled from "styled-components";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);
  const adminRef = useRef<HTMLElement | null>(null);

  return (
    <MainStyled className="main">
      <Basket />

      <div className="menu-and-admin">
        <div className="menu">
          <Menu />
        </div>

        {isModeAdmin && (
          <TransitionGroup>
            <CSSTransition
              key="admin-panel"
              classNames="admin"
              timeout={500}
              appear
              nodeRef={adminRef}
            >
              <Admin ref={adminRef} />
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    </MainStyled>
  );
}

export const MainStyled = styled.section`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  height: calc(95vh -10vh);
  background-color: ${theme.colors.background_white};

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow: hidden;

  /* Masquer la scrollbar sur Chrome, Safari et Edge */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Masquer la scrollbar sur Firefox */
  scrollbar-width: none;

  .menu-and-admin {
    position: relative;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadows.strong};
    .menu {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
    }

    ${adminAnimation}
  }
`;
