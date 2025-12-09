import styled from "styled-components";
import HintMessage from "./HintMessage";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function EditProductForm() {

  const {productSelected}  = useContext(OrderContext)
  
  return (
    <EditProductFormStyled>
      <HintMessage />
      <span>{productSelected && productSelected.title} </span>
    </EditProductFormStyled>
  );
 
}


export const EditProductFormStyled = styled.form``;