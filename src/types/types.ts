import type { ButtonHTMLAttributes, ReactNode } from "react";


export interface MenuItem {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable?: boolean;
  isAdvertised?: boolean;
  isSelected?: boolean;
}
export interface BasketItem extends MenuItem {
  isModeAdmin?: boolean;
  onDelete?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: () => void;
}


// pour le formulaire d'ajout  et de modif de produit dans l'admin panel
export type ProductForm = {
  id: string;
  imageSource: string;
  title: string;
  price: string; // autorisé ici
  quantity?: number;
  isAvailable: boolean;
  isAdvertised?: boolean;
};

export interface ProductProps {
  id: string;
  imageSource: string;
  title: string;
  leftDescription: string; // prix FORMATÉ
  hasDeleteButton?: boolean;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: () => void;
  isHoverable: boolean;
  isSelected: boolean;
  onAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  Icon?: ReactNode;
  version: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type FormType = {
  product: ProductForm;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children?: ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};



// export type BasketItem = {
//   id: string;
//   title: string;
//   imageSource: string;
//   quantity: number;
//   price?: number;
//   isAvailable?: boolean;
//   isAdvertised?: boolean;
// };




