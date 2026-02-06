import { useState } from "react"
import type { BasketItem, MenuItem } from "../types/types";
import { setLocalStorage } from "../utils/window";


export const useBasket = () => {
const [basket, setBasket] = useState<BasketItem[]>([]);

  
  const handleAddToBasket = (product: MenuItem, username: string) => {
    setBasket((prevBasket) => {
      
      let updatedBasket: BasketItem[];
      const existingItem = prevBasket.find((item) => item.id === product.id);

      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      else{
        const newBasketItem: BasketItem = {
        ...product,
        quantity: 1,
        };

        updatedBasket = [...prevBasket, newBasketItem];
      }

      // enregistrement dans le local storage pour persister le panier meme après le refresh de la page
      setLocalStorage(username, updatedBasket);
      return updatedBasket;
     
    });
  };;
  
  const handleDeleteBasketProduct = (id: string , username : string) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.filter(
        (item) => item.id !== id
      );

      setLocalStorage(username, updatedBasket);
      return updatedBasket;
    });
   
  };

const updateBasketProductPrice = (id: string, newPrice: number , username : string) => {
  setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((item) =>
        item.id === id ? { ...item, price: newPrice } : item
      );

      setLocalStorage(username, updatedBasket);
      return updatedBasket;
    });
  };




  return {
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    updateBasketProductPrice,
  };
}