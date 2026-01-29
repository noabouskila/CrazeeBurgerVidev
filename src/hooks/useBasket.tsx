import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"
import type { MenuItem } from "../types/types";
import { deepClone, removeObjectById, findObjectById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const incrementProductAlreadyInBasket = (
    productId: string,
    basketCopy: MenuItem[]
  ) => {
    const index = basketCopy.findIndex((item) => item.id === productId);
    if (index >= 0) {
      basketCopy[index] = {
        ...basketCopy[index],
        quantity: (basketCopy[index].quantity ?? 0) + 1,
      };
    }
  };

  // Fonction pour créer un nouveau produit dans le panier
  const createNewBasketProduct = (
    productToAdd: MenuItem,
    basketCopy: MenuItem[]
  ) => {
    const newProduct = { ...productToAdd, quantity: 1 };
    basketCopy.push(newProduct);
  };


  const handleAddToBasket = (productToAdd: MenuItem) => {
    setBasket((prevBasket) => {
      // On clone pour ne pas muter directement
      const basketCopy = deepClone(prevBasket);

      const productAlreadyInBasket = findObjectById(
        basketCopy,
        productToAdd.id
      );

      if (productAlreadyInBasket) {
        incrementProductAlreadyInBasket(productToAdd.id, basketCopy);
      } else {
        createNewBasketProduct(productToAdd, basketCopy);
      }

      return basketCopy;
    });
  };

  const handleDeleteBasketProduct = (idBasketProduct: string) => {
    //1. copy du state (optional because filter returns a new array )
    const basketCopy = deepClone(basket);

    //2. manip de la copie state
    //const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);

    //3. update du state
    setBasket(basketUpdated);

    
  };

  // met a jour le total du panier si on change le prix 
  const updateBasketProductPrice = (id: string, newPrice: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((product) =>
        product.id === id ? { ...product, price: newPrice } : product
      )
    );
  };

  return {
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    updateBasketProductPrice,
  };
}