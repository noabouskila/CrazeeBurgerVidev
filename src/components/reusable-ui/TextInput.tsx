import styled from "styled-components";
import { theme } from "../../theme";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
};

export default function TextInput({
  value,
  onChange,
  Icon,
  ...extraProps
}: InputProps) {
  return (
    <InputStyled>
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

export const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  padding-top: 18px;
  padding-right: 24px;
  padding-bottom: 18px;
  padding-left: 24px;
  margin-bottom: 20px;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  svg {
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }

  input:focus,
  input:hover,
  input:active {
    outline: none;
  }
`;
