import styled from 'styled-components';
import { theme } from "../../../theme";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
};

export default function Input({ value, onChange, Icon, ...extraProps }: InputProps) {
  return (
    <InputStyled>
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
     
}

export const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  padding-top: 18px;
  padding-right: 24px;
  padding-bottom: 18px;
  padding-left: 24px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  svg {
    color: ${theme.colors.greyDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
  }
  
  input:focus,
  input:hover,
  input:active {
    outline: none;
  }
  
`;
