import { FiCheck } from "react-icons/fi";
import styled from 'styled-components';
import { theme } from "../../../../../../theme";


export default function SubmitMessage() {

  return (
    <SubmitMessageStyled >
        <FiCheck />
        <span> Ajouté avec succes !</span>
    </SubmitMessageStyled>

  )

}


export const SubmitMessageStyled = styled.div`
  
    color: ${theme.colors.success};
    margin-left: 15px;
    align-items: center;
    display: flex;

    svg {
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
        padding: 2px;
    }

    span {
        margin-left: 5px;
    }
`;


