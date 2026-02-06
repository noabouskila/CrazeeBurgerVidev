import type {  BasketItem, MenuItem, ProductForm } from "./types";


export interface OrderContextType {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;

  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;

  currentTabSelected: string;
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>;

  menu: MenuItem[];
  handleAdd: (newProduct: ProductForm, username: string) => void;
  handleDelete: (productId: string, username: string) => void;
  handleEdit: (productBeingEdited: ProductForm, username: string) => void;
  resetMenu: (username: string) => void;

  newProduct: ProductForm;
  setNewProduct: React.Dispatch<React.SetStateAction<ProductForm>>;

  productSelected: ProductForm;
  setProductSelected: React.Dispatch<React.SetStateAction<ProductForm>>;

  titleEditRef: React.RefObject<HTMLInputElement | null>;

  basket: BasketItem[];
  handleAddToBasket: (productToAdd: MenuItem, username: string) => void;
  handleDeleteBasketProduct: (productId: string, username: string) => void;
  updateBasketProductPrice: (
    id: string,
    newPrice: number,
    username: string,
  ) => void;
  selectProductForEdit: (productId: string) => void;
  setShouldFocusInput: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  isLoading: boolean;
}
