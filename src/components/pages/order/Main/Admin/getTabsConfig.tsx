import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import type { getTabsConfigType } from "../../../../../types/types";
import AddProductForm from "./AdminPanel/AddProductForm";
import EditProductForm from "./AdminPanel/EditProductForm";

export const getTabsConfig = (): getTabsConfigType[] => [
  {
    index: "add",
    Icon: <AiOutlinePlus />,
    label: "Ajouter un produit",
    Content: <AddProductForm />,
  },
  {
    index: "edit",
    Icon: <MdModeEditOutline />,
    label: "Modifier un produit",
    Content: <EditProductForm />,
  },
];

export const getTabSelected = (
  tabs: getTabsConfigType[],
  currentTabSelected: string
): getTabsConfigType | undefined => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
