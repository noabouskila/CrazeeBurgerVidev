import styled from "styled-components";
import { theme } from "../../theme";
import type { IconType } from "react-icons";


export default function Tab({
  Icon,
  className,
  text,
}: {
  Icon: IconType;
  className?: string;
  text?: string;
}) {
  return (
    <TabStyled type="button" className={className}>
      <Icon />
      {text}
    </TabStyled>
  );
}

export const TabStyled = styled.button`
  display: flex;
  align-items: center;
  height: 43px;
  padding: 0px 22px;

  background-color: ${theme.colors.white};

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  box-shadow: ${theme.shadows.subtle};

  font-size: ${theme.fonts.size.P0};

  cursor: pointer;

  &:hover,
  &:active &:focus {
    border-bottom: 2px solid ${theme.colors.white};
  }

 
  
`;
