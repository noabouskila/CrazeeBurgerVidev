import styled from "styled-components";
import HintMessage from "./HintMessage";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getTextInputConfig } from "./getTextInputConfig";

export default function EditProductForm() {

  const { productSelected, setProductSelected  , handleEdit} = useContext(OrderContext);
  const TextInputs = getTextInputConfig(productSelected);
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedProduct = {
      ...productSelected,
      [name]: value,
    }; 
    // mise a jour de la modification dans le state interne de linput 
    setProductSelected(updatedProduct);

    // pour que la modification soit mis a jour et transferer dans le menu
    handleEdit(updatedProduct);
  };

  if (!productSelected.id) {
    return <HintMessage />
  }
  
  return (
    <EditProductFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
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

    
    </EditProductFormStyled>
  );
 
}


export const EditProductFormStyled = styled.form`
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
`;