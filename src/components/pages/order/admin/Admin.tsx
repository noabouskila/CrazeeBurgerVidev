import styled from 'styled-components';
import AdminPanel from './AdminPanel';
// import Tab from '../../../reusable-ui/Tab';

export default function Admin() {
  return (
    <AdminStyled>
        {/* <Tab /> */}
        <AdminPanel/>
    </AdminStyled>
  )
}



export const  AdminStyled= styled.section`
  background-color: blue;
  height : 250px ; 
  /* position: absolute; */
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 10;

  
`;


    