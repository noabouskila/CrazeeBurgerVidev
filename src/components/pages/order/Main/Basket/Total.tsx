import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function Total({ amountToPay }: { amountToPay: number }) {
  return (
    <TotalStyled>
      <span>Total</span>
      <CasinoEffect count={formatPrice(amountToPay)} className="amount" />
    </TotalStyled>
  );
}

export const TotalStyled = styled.div`
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
