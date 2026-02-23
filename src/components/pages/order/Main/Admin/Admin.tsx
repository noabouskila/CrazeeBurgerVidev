import styled from "styled-components";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminTabs from "./AdminTabs";
import OrderContext from "../../../../../context/OrderContext";
import { forwardRef, useContext } from "react";

const Admin = forwardRef<HTMLElement, { className?: string }>(function Admin(
  { className },
  ref
) {
  const { isCollapse } = useContext(OrderContext);

  return (
    <AdminStyled ref={ref} className={className}>
      <AdminTabs />

      {isCollapse && <AdminPanel />}
    </AdminStyled>
  );
});

export default Admin;

export const AdminStyled = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
