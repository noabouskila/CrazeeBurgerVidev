import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../reusable-ui/Tab";
import styled from 'styled-components';
import { theme } from "../../../../../theme";


export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={FiChevronDown} className="iconchevron" />
      <Tab
        Icon={AiOutlinePlus}
        className="iconplus"
        text="Ajouter un produit"
      />
      <Tab
        Icon={MdModeEditOutline}
        className="iconpencil"
        text="Modifier un produit"
      />
    </AdminTabsStyled>
  );
}


export const AdminTabsStyled = styled.div`
  display: flex;
  position: relative;
  left: 5%;
  top: 1px;

  .iconchevron,
  .iconpencil {
    color: ${theme.colors.greySemiDark};
  }

  .iconplus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.background_dark};
  }

`;


