import styled, { css } from "styled-components";
import { theme } from "../../theme";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
  version?: string
};

 const TextInput = React.forwardRef<HTMLInputElement, InputProps>((
  { 
    value,
    onChange,
    Icon,
    version = "normal", 
    ...extraProps
  }: InputProps,
  ref
) => {
  return (
    <TextInputStyled version={version}>
      {Icon}
      <input ref={ref} type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
});
export default TextInput;

export const TextInputStyled = styled.div<{ version?: string }>`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  input:focus,
  input:hover,
  input:active {
    outline: none;
  }

  /* versions css */
  ${({ version }) => version && extraStyleVersions[version]}
`;


const extraStyleNormal =  css`
  background-color: ${theme.colors.white};
  margin: 18px 0;
  padding: 18px 24px;
  svg {
    color: ${theme.colors.greySemiDark};
  }
`;


const extraStyleMinimalist =  css`
  border: none;
  background-color: ${theme.colors.background_white};
  padding: 8px 16px 8px 24px;
  svg {
    color: ${theme.colors.greyBlue};
  }
  input {
    background-color: ${theme.colors.background_white};
  }
`;


const extraStyleVersions: Record<string, any> = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};

