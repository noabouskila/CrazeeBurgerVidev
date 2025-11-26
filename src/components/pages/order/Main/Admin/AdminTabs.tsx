import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../reusable-ui/Tab";
import styled from 'styled-components';
import { theme } from "../../../../../theme";

interface AdminTabsProps {
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function AdminTabs({ isCollapse, setIsCollapse }: AdminTabsProps) {
 

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapse ? <FiChevronDown/> : <FiChevronUp/>}
        className={ isCollapse ? "icon-chevron-down"  : "icon-chevron-up"}
        onClick={() => setIsCollapse(!isCollapse)}
      />
      <Tab
        Icon={<AiOutlinePlus/>}
        className="iconplus"
        label="Ajouter un produit"
        // onClick={}
      />
      <Tab
        Icon={<MdModeEditOutline/>}
        className="iconpencil"
        label="Modifier un produit"
        // onClick={}
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

  .icon-chevron-down {
    color: ${theme.colors.greySemiDark};
  }

  .icon-chevron-up {
    color: ${theme.colors.white};
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;


