import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import type { MenuItem } from "../types/types";

export const syncBothMenus = async (
  userId: string,
  menuUpdated: MenuItem[],
) => {
  const docRef = doc(db, "users", userId);
  const newProduct = {
    username: userId,
    menu: menuUpdated,
  };

  await setDoc(docRef, newProduct);
};
