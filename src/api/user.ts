import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config";
import { fakeMenu } from "../data/fakeMenu";

export const getUser = async  (idUser: string) => {

  const docRef = doc(db, "users", idUser);

  const result =  await getDoc(docRef);
  console.log("result", result.data());   
    if (result.exists()) { 
        const data = result.data();
        return data
    }

};

export const createUser = async (idUser: string) => {

    const docRef = doc(db, "users", idUser);
    const newUser =  {
        username : idUser,
        menu : fakeMenu.LARGE
    }

    await setDoc(docRef, newUser) 

   
};