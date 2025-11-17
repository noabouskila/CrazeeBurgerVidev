

export default function Main() {
  return (
   <MainStyled className="main">main</MainStyled>
  )
}


import styled from 'styled-components';

export const MainStyled  = styled.section`
 
    flex: 1;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
`;

