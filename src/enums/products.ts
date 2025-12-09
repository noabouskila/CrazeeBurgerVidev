import type { ProductForm } from "../types/types";

export const EMPTY_PRODUCT: Readonly<ProductForm> = {
  id: "0",
  imageSource: "",
  title: "",
  price: "",
  isAvailable: true,
};
   
