import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../reusable-ui/Tab";
import styled from 'styled-components';
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";



export default function AdminTabs() {

  const {
    isCollapse,
    isAddTableSelected,
    isEditTableSelected , 
    setIsCollapse,
    setIsAddTableSelected,
    setIsEditTableSelected,
  } = useContext(OrderContext);

  const selectAddTable = () => {
    setIsCollapse(true);
    setIsAddTableSelected(true);
    setIsEditTableSelected(false);
  };
  const selectEditTable = () => {
    setIsCollapse(true);
    setIsAddTableSelected(false);
    setIsEditTableSelected(true);
  };

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapse ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapse ? "isActive" : ""}
        // onClick={() => setIsCollapse(!isCollapse)}  : il vaut mieux  faire : 
        onClick={() => setIsCollapse((prev) => !prev)}
      />

      <Tab
        Icon={<AiOutlinePlus />}
        className={isAddTableSelected ? "isActive" : ""}
        label="Ajouter un produit"
        onClick={() => {
          selectAddTable();
        }}
      />

      <Tab
        Icon={<MdModeEditOutline />}
        className={isEditTableSelected ? "isActive" : ""}
        label="Modifier un produit"
        onClick={() => {
          selectEditTable();
        }}
      />
    </AdminTabsStyled>
  );
}


export const AdminTabsStyled = styled.div`
  display: flex;
  position: relative;
  left: 5%;
  top: 1px;


  .isActive {
    color: ${theme.colors.white};
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
  }



  button {
    margin-left: 1px;
  }
`;


