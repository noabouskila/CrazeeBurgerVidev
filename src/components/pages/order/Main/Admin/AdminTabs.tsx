import Tab from "../../../../reusable-ui/Tab";
import styled from 'styled-components';
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



export default function AdminTabs() {

  const {
    isCollapse,
    setIsCollapse,

    // isAddTableSelected,
    // setIsAddTableSelected,

    // isEditTableSelected,
    // setIsEditTableSelected,

    currentTabSelected,
    setCurrentTabSelected,

  } = useContext(OrderContext);


  const selectTab = (indexTabSelected: "add" | "edit") => {

    setIsCollapse(true);

    // if (tabSelected === "add") {
    //   setIsAddTableSelected(true);
    //   setIsEditTableSelected(false);
    // }

    // if (tabSelected === "edit") {
    //   setIsAddTableSelected(false);
    //   setIsEditTableSelected(true);
    // }
    
    setCurrentTabSelected(indexTabSelected);
  };

  const tabs = getTabsConfig(currentTabSelected);



  

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapse ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapse ? "isActive" : ""}
        label=""
        onClick={() => setIsCollapse((prev) => !prev)}
      />
      {tabs.map((tab) => (
        <Tab
          Icon={tab.Icon}
          className={tab.className}
          label={tab.label}
          onClick={() => selectTab(tab.index as "add" | "edit")}
        />
      ))}
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


