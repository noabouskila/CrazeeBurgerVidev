import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getTextInputConfig } from "./getTextInputConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import SubmitButton from './SubmitButton';



export default function AddProductForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProducttoAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProducttoAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMsg();
  };

  const displaySuccessMsg = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const TextInputs = getTextInputConfig(newProduct);

  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />

      <div className="input-fields">
        {TextInputs.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            version="minimalist"
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="submit">
        <SubmitButton isSubmitted={isSubmitted} />
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
  }
`;
