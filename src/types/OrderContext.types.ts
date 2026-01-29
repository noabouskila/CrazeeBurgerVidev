import type {  BasketItem, MenuItem, ProductForm } from "./types";


export interface OrderContextType {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;

  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;

  currentTabSelected: string;
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>;

  menu: MenuItem[];
  handleAdd: (newProduct: ProductForm) => void;
  handleDelete: (productId: string) => void;
  handleEdit: (productBeingEdited: ProductForm) => void;
  resetMenu: () => void;

  newProduct: ProductForm;
  setNewProduct: React.Dispatch<React.SetStateAction<ProductForm>>;

  productSelected: ProductForm;
  setProductSelected: React.Dispatch<React.SetStateAction<ProductForm>>;

  titleEditRef: React.RefObject<HTMLInputElement | null>;

  basket: BasketItem[];
  handleAddToBasket: (productToAdd: MenuItem) => void;
  handleDeleteBasketProduct: (productId: string) => void;
  updateBasketProductPrice: (id: string, newPrice: number) => void;
}
