import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavBarRightSide({ username }: { username: string }) {

  const [isChecked, setIsChecked] =  React.useState(false);

  const onClick = () => {
    console.log("toggle clicked");
    setIsChecked(!isChecked);
  }

  return (

    <NavBarRightSideStyled>

      <ToggleButton 
        isChecked={isChecked}
        onToggle={onClick}
        labelIfChecked={"ACTIVER LE MODE ADMIN"}
        labelIfUnchecked={"DESACTIVER LE MODE ADMIN"}
      />

      <Profile username={username} />

    </NavBarRightSideStyled>
  );
}

export const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.greyDark};
  padding-right: 50px;

 
`;

