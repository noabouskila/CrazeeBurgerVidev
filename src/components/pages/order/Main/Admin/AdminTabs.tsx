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


  const selectTab = (tabSelected: "add" | "edit") => {
    setIsCollapse(true);

    if (tabSelected === "add") {
      setIsAddTableSelected(true);
      setIsEditTableSelected(false);
    }

    if (tabSelected === "edit") {
      setIsAddTableSelected(false);
      setIsEditTableSelected(true);
    }
  };

  const tabsConfig = [
    {
      Icon: isCollapse ? <FiChevronDown /> : <FiChevronUp />,
      className: !isCollapse ? "isActive" : "",
      label: "",
      onClick: () => setIsCollapse((prev) => !prev),
    },
    {
      Icon: <AiOutlinePlus />,
      className: isAddTableSelected ? "isActive" : "",
      label: "Ajouter un produit",
      onClick: () => {
        selectTab("add");
      },
    },
    {
      Icon: <MdModeEditOutline />,
      className: isEditTableSelected ? "isActive" : "",
      label: "Modifier un produit",
      onClick: () => {
        selectTab("edit");
      },
    },
  ];

  return (
    <AdminTabsStyled>
      { tabsConfig.map((tab)=>{
        return (
          <Tab
            Icon={tab.Icon}
            className={tab.className}
            label={tab.label}
            onClick={tab.onClick}
          />
        )
      })}
      
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


