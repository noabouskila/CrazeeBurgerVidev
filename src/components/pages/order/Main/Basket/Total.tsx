

export default function Total({amountToPay}: {  amountToPay: string}) {
  return (
   
    <TotalStyled>
      <span>Total</span>
      <span>{amountToPay}</span>
    </TotalStyled>

  );
}

import styled from 'styled-components';
import { theme } from '../../../../../theme';

export const TotalStyled = styled.div`
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin  : 10px 0 ; 
`;

