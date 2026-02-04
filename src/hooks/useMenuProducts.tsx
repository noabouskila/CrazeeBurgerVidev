// rassemble la logique crud du menu products

import { useState } from "react";
import type { MenuItem, ProductForm } from "../types/types";
import { fakeMenu } from "../data/fakeMenu";
import { convertProductFormToMenuItem } from "../utils/productUtils";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenuProducts = () => {


  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.LARGE);

  // comportement pour ajouter un produit au menu
  const handleAdd = (newProducttoAdd: ProductForm  , username : string) => {
    const menuProduct: MenuItem = convertProductFormToMenuItem(newProducttoAdd);
    const menuCopy: MenuItem[] = deepClone(menu);
    const updatedMenu = [menuProduct, ...menuCopy];
    setMenu(updatedMenu);
    syncBothMenus(username , updatedMenu);
  };

  // comportement pour supprimer un produit du menu
  const handleDelete = (productId: string) => {
    const menuCopy: MenuItem[] = deepClone(menu);
    // const menuCopy = [...menu];// shalow copy suffit
    const updatedMenu = menuCopy.filter((product) => product.id !== productId);
    setMenu(updatedMenu);
  };

  // comportement pour mettre a  jour modifier un produit au menu
  const handleEdit = (productBeingEdited: ProductForm) => {
    const menuCopy: MenuItem[] = deepClone(menu);
    // trouver le produit qui a lid le meme que celui qui est en train detre modifie
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    if (indexOfProductToEdit !== -1) {
      const editedProduct: MenuItem =
        convertProductFormToMenuItem(productBeingEdited);
      menuCopy[indexOfProductToEdit] = editedProduct; // remplacer le produit
      setMenu(menuCopy);

    }
  };

  // comportement pour reinitialiser le menu
  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };


  return { menu , setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
}