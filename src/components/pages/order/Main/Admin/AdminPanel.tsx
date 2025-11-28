import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function AdminPanel() {

  const { isAddTableSelected, isEditTableSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {isAddTableSelected && "Ajouter un Produit "}
      {isEditTableSelected && "Modifier un Produit "}
    </AdminPanelStyled>
  );
}

export const AdminPanelStyled = styled.div`

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;
