import type { ProductForm } from "../types/types";

export const EMPTY_PRODUCT: Readonly<ProductForm> = {
  id: "",
  imageSource: "",
  title: "",
  price: "",
  isAvailable: true,
};
   
