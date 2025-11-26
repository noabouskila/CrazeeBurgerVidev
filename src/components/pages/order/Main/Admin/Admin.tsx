import styled from 'styled-components';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';

export default function Admin() {
  return (
    <AdminStyled>
        <AdminTabs />
        <AdminPanel/>
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


    