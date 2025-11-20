import styled from "styled-components";
import { theme } from "../../theme";
import type { ReactNode } from "react";

export default function PrimaryButton({ label, Icon , className ,onClick }: { label: string; Icon?: ReactNode  ; className?: string; onClick?: () => void   }) {
  return (
    <PrimaryButtonStyled type="submit" className={className} onClick={onClick}>
      <span> {label} </span>
      {Icon}
    </PrimaryButtonStyled>
  );
}


export const PrimaryButtonStyled = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: none;
  font-size: ${theme.fonts.size.P0};
  /* width: 400px;
  height: 53px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  &:active {
    cursor: pointer;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

