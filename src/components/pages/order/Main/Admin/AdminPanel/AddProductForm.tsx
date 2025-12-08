import styled from "styled-components";
import { theme } from "../../../../../../theme";
import type { MenuItem, NewProductForm } from "../../../../../../types";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { FiCheck } from "react-icons/fi";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../../../reusable-ui/Button";

export const EMPTY_PRODUCT: NewProductForm = {
  id: 0,
  imageSource: "",
  title: "",
    price: "",
  isAvailable: true,
};

export default function AddProductForm() {
 

  const { handleAdd, newProduct , setNewProduct } = useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const displaySuccessMsg = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProducttoAdd: MenuItem = {
      ...newProduct,
      id: Date.now(),
      price: Number(newProduct.price),
    };

    handleAdd(newProducttoAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMsg();
  };

  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
      <div
        className={
          newProduct.imageSource
            ? "image-prevew"
            : "image-prevew image-preview-empty"
        }
      >
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div> Aucune image</div>
        )}
      </div>

      <div className="input-fields">
        <TextInput
          Icon={<FaHamburger />}
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom du Produit ( ex: Super Burger)"
          version="minimalist"
        />

        <TextInput
          Icon={<BsFillCameraFill />}
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="Lien URL d'un image (ex: https://la-photo-de-mon-produit.png)"
          version="minimalist"
        />

        <TextInput
          Icon={<MdOutlineEuro />}
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          type="number"
          placeholder="Prix"
          version="minimalist"
        />
      </div>

      <div className="submit">
        <Button label="Ajouter un nouveau produit au menu" version="success" />
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck />
            <span> Ajouté avec succes !</span>
          </div>
        )}
      </div>
    </AddProductFormStyled>
  );
}

export const AddProductFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 70%;
  height: 100%;

  .image-prevew {
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .image-preview-empty {
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.greySemiDark};
  }

  .input-fields {
    grid-area: 1/2/-2/3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    height: 120px;
    row-gap: 10px;
    margin-left: 15px;
  }

  .submit {
    grid-area: 4/-2/-1/-1;
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-top: 10px;

    .submit-message {
      color: ${theme.colors.success};
      margin-left: 15px;
      align-items: center;
      display: flex;

      svg {
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
        padding: 2px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
`;
