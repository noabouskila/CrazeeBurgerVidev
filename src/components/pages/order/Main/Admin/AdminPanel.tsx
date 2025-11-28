import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
// import { getTabsConfig } from "./getTabsConfig";


export default function AdminPanel() {

  const { currentTabSelected  } = useContext(OrderContext);

  // const tabs = getTabsConfig(currentTabSelected)
  // const tabIndexSelected =  tabs.find((tab) => tab.index  === currentTabSelected)

  return (
    <AdminPanelStyled>
      {/* {currentTabSelected === tabIndexSelected?.index && tabIndexSelected?.label} */}
      {currentTabSelected === "add" && "Ajouter un Produit "}
      {currentTabSelected === "edit" && "Modifier un Produit "}
    </AdminPanelStyled>
  );
}

export const AdminPanelStyled = styled.div`

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;
