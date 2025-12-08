import { createContext } from "react";
import type { MenuItem, NewProductForm } from "../types";

export interface OrderContextType {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;

  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;

  currentTabSelected: string;
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>;

  menu: MenuItem[];
  handleAdd: (newProduct: MenuItem) => void;
  handleDelete: (productId: number) => void;
  resetMenu: () => void;

  newProduct: NewProductForm;
  setNewProduct: React.Dispatch<React.SetStateAction<NewProductForm>>;
}

const OrderContext = createContext<OrderContextType>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapse: true,
  setIsCollapse: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},

  menu: [],

  handleAdd: () => {},
  handleDelete: () => {},
  resetMenu: () => {},

  newProduct: {
    id: 0,
    imageSource: "",
    title: "",
    price: "",
    isAvailable: true,
  },

  setNewProduct: () => {},
});

export default OrderContext;
