import { useState } from "react"
import type { BasketItem, MenuItem } from "../types/types";


export const useBasket = () => {
const [basket, setBasket] = useState<BasketItem[]>([]);

  
  const handleAddToBasket = (product: MenuItem) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);

      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const newBasketItem: BasketItem = {
        ...product,
        quantity: 1,
      };

      return [...prevBasket, newBasketItem];
    });
  };
  
  const handleDeleteBasketProduct = (id: string) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

const updateBasketProductPrice = (id: string, newPrice: number) => {
  setBasket((prevBasket) =>
    prevBasket.map((item) =>
      item.id === id ? { ...item, price: newPrice } : item
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