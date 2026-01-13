import { useState } from "react"
import { fakeBasket } from "../data/fakeBasket"
import type { MenuItem } from "../types/types";

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (producToAdd: MenuItem) => {};

    return { basket, handleAddToBasket };

}