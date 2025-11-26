import styled from 'styled-components';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';
import { useState } from "react";

export default function Admin() {

  const [isCollapse , setIsCollapse] = useState(true)

  return (
    <AdminStyled>
        <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        {isCollapse && <AdminPanel/>}
    </AdminStyled>
  )
}



export const AdminStyled = styled.section`

  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;


    