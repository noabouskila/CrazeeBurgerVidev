import styled from "styled-components";
import { theme } from "../../theme";
import type { ReactNode } from "react";

export default function PrimaryButton({ label, Icon }: { label: string; Icon?: ReactNode }) {
  return (
    <PrimaryButtonStyled type="submit">
      <span> {label} </span>
      {Icon}
    </PrimaryButtonStyled>
  );
}


export const PrimaryButtonStyled = styled.button`
  font-family: "Open Sans", sans-serif;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P0};
  width: 400px;
  height: 53px;
  border-radius: 5px;
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

