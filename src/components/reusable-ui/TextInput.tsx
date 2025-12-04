import styled from "styled-components";
import { theme } from "../../theme";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
  className?: string;
};

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}: InputProps) {
  return (
    <InputStyled className={className}>
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

export const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  padding : 18px 24px ; 
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
