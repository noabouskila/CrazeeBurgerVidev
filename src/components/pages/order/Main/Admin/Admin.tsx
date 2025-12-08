import styled from "styled-components";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminTabs from "./AdminTabs";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function Admin() {
  const { isCollapse } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />

      {isCollapse && <AdminPanel />}
    </AdminStyled>
  );
}

export const AdminStyled = styled.section`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
