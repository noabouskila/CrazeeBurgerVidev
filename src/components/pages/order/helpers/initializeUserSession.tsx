import { getMenu } from "../../../../api/product";
import type { BasketItem, MenuItem } from "../../../../types/types";
import { getLocalStorage } from "../../../../utils/window";

export const initializeUserSession = async (
    username: string,
    setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>,
    setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>,
    setIsLoadingMenu: React.Dispatch<React.SetStateAction<boolean>>,
    setIsLoadingBasket: React.Dispatch<React.SetStateAction<boolean>>,
) => {

    // 1) charger le menu de chaque user au chargement du composant
    const initializeMenu = async (
    ) => {
        setIsLoadingMenu(true);
        const menuReceived = await getMenu(username);
        setMenu(menuReceived);
        setIsLoadingMenu(false);
    };

    // 2) charger le panier de chaque user au chargement du composant
    // le localstorage est synchrone pas besoin de faire du async await
    const initializeBasket = () => {
        setIsLoadingBasket(true);
        const basketFromStorage = getLocalStorage(username);
        setBasket(basketFromStorage ?? []); // si pas de panier en storage, initialiser avec un tableau vide
        setIsLoadingBasket(false);
    };

    await initializeMenu();
    initializeBasket();
};