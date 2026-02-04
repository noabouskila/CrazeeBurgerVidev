import { createContext } from "react";
import type { OrderContextType } from "../types/OrderContext.types";
import { EMPTY_PRODUCT } from "../enums/products";


// détecter les usages hors provider
const throwError = (name: string) => () => {
  throw new Error(`${name} called outside OrderContext Provider`);
};

const OrderContext = createContext<OrderContextType>({
  isModeAdmin: false,
  setIsModeAdmin: throwError("setIsModeAdmin"),

  isCollapse: true,
  setIsCollapse: throwError("setIsCollapse"),

  currentTabSelected: "",
  setCurrentTabSelected: throwError("setCurrentTabSelected"),

  menu: [],

  handleAdd: throwError("handleAdd"),
  handleDelete: throwError("handleDelete"),
  handleEdit: throwError("handleEdit"),
  resetMenu: throwError("resetMenu"),

  newProduct: EMPTY_PRODUCT,
  setNewProduct: throwError("setNewProduct"),

  productSelected: EMPTY_PRODUCT,
  setProductSelected: throwError("setProductSelected"),
  titleEditRef: { current: null },

  basket: [],
  handleAddToBasket: throwError("handleAddToBasket"),

  handleDeleteBasketProduct: throwError("handleDeleteToBasket"),
  updateBasketProductPrice: throwError("handleUpdatePriceToBasket"),
  selectProductForEdit: throwError("handleUpdateToBasket"),
  setShouldFocusInput: throwError("setShouldFocusInput"),
  username: ""
});

export default OrderContext;
