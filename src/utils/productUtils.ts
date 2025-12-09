import type { ProductForm, MenuItem } from "../types/types";

export const convertProductFormToMenuItem = (
  product: ProductForm
): MenuItem => ({
  id: product.id,
  imageSource: product.imageSource,
  title: product.title,
  price: Number(product.price),
  isAvailable: product.isAvailable,
  quantity: 1,
  isAdvertised: false,
});


export const convertMenuItemToProductForm = (item: MenuItem): ProductForm => ({
  id: item.id,
  imageSource: item.imageSource,
  title: item.title,
  price: item.price.toString(), // number → string
  isAvailable: item.isAvailable ?? true,
});