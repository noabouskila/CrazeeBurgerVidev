
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur le produit du menu pour le modifier{" "}
      <span className="live-update">en tant réèl</span>
    </EditInfoMessageStyled>
  );
}


export const EditInfoMessageStyled = styled.p`
  
    font-family: ${theme.fonts.family.openSans};
    color: ${theme.colors.primary};
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.SM};

    .live-update {
      text-decoration: underline;
    }

` 
;