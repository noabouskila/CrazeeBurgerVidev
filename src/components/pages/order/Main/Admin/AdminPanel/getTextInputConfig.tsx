import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import type { NewProductForm } from "../../../../../../types/types";

export const getTextInputConfig = (newProduct: NewProductForm) => [
  {
    id: "01",
    Icon: <FaHamburger />,
    name: "title",
    value: newProduct.title,
    placeholder: "Nom du Produit ( ex: Super Burger)",
  },
  {
    id: "02",
    Icon: <BsFillCameraFill />,
    name: "imageSource",
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'un image (ex: https://la-photo-de-mon-produit.png)",
  },
  {
    id: "03",
    Icon: <MdOutlineEuro />,
    name: "price",
    value: newProduct.price,
    placeholder: "Prix",
  },
];
