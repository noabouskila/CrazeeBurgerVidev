import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";


export default function AdminPanel() {

  const { currentTabSelected  } = useContext(OrderContext);

  const tabs = getTabsConfig()

  const tabSelected = getTabSelected(tabs, currentTabSelected);

 
  if (!tabSelected) {
    return <AdminPanelStyled />; // éviter crash
  }


  return (
    <AdminPanelStyled>
      {tabSelected.label}
    </AdminPanelStyled>
  );
}

export const AdminPanelStyled = styled.div`

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;
