import styled from "styled-components";
import { theme } from "../../../../../../theme";
import type { MenuItem } from "../../../../../../types";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";


const EMPTY_PRODUCT: MenuItem = {
  id: 0,
  imageSource: "",
  title: "",
  price: 0,
  isAvailable: true,
};
    
export default function AddProductForm() {

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

    const { handleAdd } = useContext(OrderContext);
    
    const newProducttoAdd: MenuItem = {
      ...newProduct,
      id: Date.now(),
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
        handleAdd(newProducttoAdd);
        setNewProduct(EMPTY_PRODUCT);
    };


  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
      <div className="image-prevew">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div> Aucune image</div>
        )}
      </div>

      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom du Produit ( ex: Super Burger)"
        />

        <input
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="Lien URL d'un image (ex: https://la-photo-de-mon-produit.png)"
        />

        <input
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          type="number"
          placeholder="Prix"
        />
      </div>

      <button className="submit-button" type="submit">
        Ajouter un nouveau produit au menu
      </button>
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
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    grid-area: 1/2/-2/3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    height: 120px;
    row-gap: 10px;
    

    input {
      border: none;
      background-color: ${theme.colors.background_white};
      border-radius: ${theme.borderRadius.round};
      padding: 8px 16px 8px 24px;
    }
  }

  .submit-button {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    grid-area: 4/-2/-1/-1;
    width: 50%;
    border: none;
    border-radius: ${theme.borderRadius.round};
    cursor: pointer;
  }
`;
