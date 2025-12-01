import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import type { getTabsConfigType } from "../../../../../types";



export const getTabsConfig = (): getTabsConfigType[] => [
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
    label: "Ajouter un produit",
  },
  {
    index: "edit",
    Icon: <MdModeEditOutline />,
    label: "Modifier un produit",
  },
];


export const getTabSelected = (
  tabs: getTabsConfigType[],
  currentTabSelected: string
): getTabsConfigType | undefined => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};