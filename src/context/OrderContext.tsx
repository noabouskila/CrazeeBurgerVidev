import { createContext } from "react";
import type { MenuItem } from "../types";

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
  resetMenu : () => void;
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
});

export default OrderContext;
