import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
  return (
    <FooterStyled>
      <p>
        Codé avec{" "}
        <span>
          <FaHeart />
        </span>{" "}
        et React | TS
      </p>
    </FooterStyled>
  );
}



export const FooterStyled = styled.div`
  font-size: ${theme.fonts.size.P2};
  text-align: center;
  color: ${theme.colors.white};
  align-items: center;

  svg {
    color: ${theme.colors.red};
    
  }
`;

 ;
