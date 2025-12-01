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

    currentTabSelected,
    setCurrentTabSelected,

  } = useContext(OrderContext);

  const selectTab = (indexTabSelected: "add" | "edit") => {

    setIsCollapse(true);
    setCurrentTabSelected(indexTabSelected);
  };

  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapse ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapse((prev) => !prev)}
        className={!isCollapse ? "isActive" : ""}
      />

      {tabs.map((tab) => (
        <Tab
          Icon={tab.Icon}
          label={tab.label}
          onClick={() => selectTab(tab.index as "add" | "edit")}
          className={currentTabSelected === tab.index ? "isActive" : ""}
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


