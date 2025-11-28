import { createContext } from "react";

export interface OrderContextType {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;

  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;

  isAddTableSelected: boolean;
  setIsAddTableSelected: React.Dispatch<React.SetStateAction<boolean>>;

  isEditTableSelected: boolean;
  setIsEditTableSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderContext = createContext<OrderContextType>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapse: true,
  setIsCollapse: () => {},

  isAddTableSelected: true,
  setIsAddTableSelected: () => {},

  isEditTableSelected: true,
  setIsEditTableSelected: () => {},
});

export default OrderContext;
