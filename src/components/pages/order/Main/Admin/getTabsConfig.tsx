
import type { JSX } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export interface getTabConfigItem {
  index: string;
  Icon: JSX.Element;
  className: string;
  label: string;
  onClick?: () => void;
}

export type getTabsConfig = (currentTabSelected: string) => getTabConfigItem[];

export const getTabsConfig: getTabsConfig = (currentTabSelected) => [
  // {
  //   index: "chevronUpdown",
  //   Icon: isCollapse ? <FiChevronDown /> : <FiChevronUp />,
  //   className: !isCollapse ? "isActive" : "",
  //   label: "",
  //   onClick: () => setIsCollapse((prev) => !prev),
  // },
  {
    index: "add",
    Icon: <AiOutlinePlus />,
    className: currentTabSelected === "add" ? "isActive" : "",
    label: "Ajouter un produit",
    // onClick: () => {
    //   selectTab("add");
    // },
  },
  {
    index: "edit",
    Icon: <MdModeEditOutline />,
    className: currentTabSelected === "edit" ? "isActive" : "",
    label: "Modifier un produit",
    // onClick: () => {
    //   selectTab("edit");
    // },
  },
];
