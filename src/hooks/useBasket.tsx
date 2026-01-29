import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"
import type { MenuItem } from "../types/types";
import { deepClone, removeObjectById, findObjectById } from "../utils/array";

export const useBasket = () => { 

    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (productToAdd: MenuItem) => {
        setBasket((prevBasket) => {
             const productAlreadyInBasket = findObjectById(prevBasket, productToAdd.id);
          
            if (!productAlreadyInBasket) {
            return [{ ...productToAdd, quantity: 1 }, ...prevBasket];
            }

            return prevBasket.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: (item.quantity ?? 0) + 1 }
                : item
            );
        });
    };

      const handleDeleteBasketProduct = (idBasketProduct : string) => {
        //1. copy du state (optional because filter returns a new array )
        const basketCopy = deepClone(basket)
    
        //2. manip de la copie state
        //const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
        const basketUpdated = removeObjectById(idBasketProduct, basketCopy);
    
        //3. update du state
        setBasket(basketUpdated)
      }



    return { basket, handleAddToBasket, handleDeleteBasketProduct };

}