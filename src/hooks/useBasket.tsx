import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"
import type { MenuItem } from "../types/types";
import { deepClone, findInArray } from "../utils/array";

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (producToAdd: MenuItem) => {

        const basketCopy = deepClone(basket);
        const productAlreadyInBasket = findInArray(basketCopy , producToAdd.id);

        if(productAlreadyInBasket){
            productAlreadyInBasket.quantity = (productAlreadyInBasket.quantity ?? 0) + 1;
        }else{
            basketCopy.unshift({
                ...producToAdd , 
                quantity : 1 
            })
        }

        setBasket(basketCopy);
    };

    return { basket, handleAddToBasket };

}