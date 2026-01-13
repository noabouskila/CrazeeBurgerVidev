import type { ProductForm } from "../types/types";

export const EMPTY_PRODUCT: Readonly<ProductForm> = {
  id: "",
  imageSource: "",
  title: "",
  price: "",
  isAvailable: true,
  quantity : 0
};
   
export const DEFAULT_IMAGE = "/public/assets/coming-soon.png";
