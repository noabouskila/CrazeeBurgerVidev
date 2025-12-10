import type { ReactNode } from "react";


export interface MenuItem {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable?: boolean;
  isAdvertised?: boolean;
}
// pour le formulaire d'ajout  et de modif de produit dans l'admin panel
export type ProductForm = {
  id: string;
  imageSource: string;
  title: string;
  price: string; // autorisé ici
  isAvailable: boolean;
};

export interface ProductProps {
  id: string;
  imageSource: string;
  title: string;
  leftDescription: string; // prix FORMATÉ
  hasDeleteButton?: boolean;
  onDelete: () => void;
  onClick: () => void;
  isHoverable: boolean;
  isSelected: boolean;
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
  label?: string;
  Content?: ReactNode;
  onClick?: () => void;
};



