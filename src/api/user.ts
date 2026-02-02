import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config";
import { fakeMenu } from "../data/fakeMenu";

export const getUser = async  (userId: string) => {

  const docRef = doc(db, "users", userId);
  const result =  await getDoc(docRef);

    if (result.exists()) { 
        const data = result.data();
        return data
    }

};

export const createUser = async (userId: string) => {

    const docRef = doc(db, "users", userId);
    const newUser =  {
        username : userId,
        menu : fakeMenu.SMALL
    }

    await setDoc(docRef, newUser) 
   
};

export const authenticatUser = async (userId: string) => {
    let existingUser = await getUser(userId);
    if (!existingUser) {
    await createUser(userId);
    existingUser = await getUser(userId);
    }
    return existingUser;
}