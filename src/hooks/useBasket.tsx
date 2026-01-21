import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"
import type { MenuItem } from "../types/types";
import {  findInArray } from "../utils/array";

export const useBasket = () => { 

    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (productToAdd: MenuItem) => {
        setBasket((prevBasket) => {
            const productAlreadyInBasket = findInArray(prevBasket, productToAdd.id);

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



    return { basket, handleAddToBasket };

}

//     const handleAddToBasket = (productToAdd: MenuItem) => {

//         const basketCopy = deepClone(basket);

//         const productAlreadyInBasket = findInArray(basketCopy, productToAdd.id);

//         if (!productAlreadyInBasket) {
//         const newBasketProduct = {
//             ...productToAdd,
//             quantity: 1,
//         };

//         setBasket([newBasketProduct, ...basketCopy]);
//         return;
//         }

//         productAlreadyInBasket.quantity =
//         (productAlreadyInBasket.quantity ?? 0) + 1;

//         setBasket(basketCopy);
//    };