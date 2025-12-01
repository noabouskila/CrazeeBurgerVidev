import type { ReactNode } from "react";

export interface MenuItem {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable?: boolean;
  isAdvertised?: boolean;
}

export interface ProductProps {
  id: number;
  imageSource: string;
  title: string;
  leftDescription: string; // prix FORMATÉ
}

export interface AdminTabsProps {
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  isAddTableSelected: boolean;
  setIsAddTableSelected: React.Dispatch<React.SetStateAction<boolean>>;
  isEditTableSelected: boolean;
  setIsEditTableSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export type getTabsConfigType = {
  index: string;
  Icon: ReactNode;
  label: string;
  onClick?: () => void;
};
