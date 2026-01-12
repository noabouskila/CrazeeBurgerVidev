import styled, { css } from "styled-components";
import { theme } from "../../theme";
import type { ButtonProps } from "../../types/types";


export default function Button({
  label,
  Icon,
  version = "primary",
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled
      type="submit"
      onClick={onClick}
      $version={version}
    >
      <span> {label} </span>
      {Icon}
    </ButtonStyled>
  );
}


export const ButtonStyled = styled.button<{ $version?: string }>`
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: none;
  font-size: ${theme.fonts.size.SM};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
  }

  /* versions css  */
  ${({ $version }) => $version && extraStyleVersions[$version]}
`;


const extraStylePrimary = css`
  background-color: ${theme.colors.primary};
  width: 400px;
  height: 53px;

  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: solid 1px ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const ExtraStyleLittlePrimary = css`
  background-color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.XS};
  padding: 12px;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: solid 1px ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const extraStyleSuccess = css`
  background-color: ${theme.colors.success};
  width: 50%;
  padding: 10px;

  &:active , &:hover {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
    color: ${theme.colors.success};
  }
`;



const extraStyleVersions: Record<string, any> = {
  primary: extraStylePrimary,
  littlePrimary: ExtraStyleLittlePrimary,
  success: extraStyleSuccess,
};


