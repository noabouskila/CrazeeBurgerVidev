import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme";

export default function BasketSection({ children }: { children?: React.ReactNode;}) {
  return (
    <BasketSectionStyled>{children}</BasketSectionStyled>
  )
}


export const BasketSectionStyled = styled.div`
  background-color: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
`;




