import HintMessage from "./HintMessage";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import SavingMessage from "./SavingMessage";
import { useDisplaySuccessMsg } from "../../../../../../hooks/useDisplaySuccessMessage";

export default function EditProductForm() {

  const [valueOnFocus, setValueOnFocus] = useState<string>("");
  const { username , productSelected, setProductSelected, handleEdit, titleEditRef , updateBasketProductPrice } = useContext(OrderContext);
  const { isSubmitted : isSaving , DisplaySuccessMsg } = useDisplaySuccessMsg();
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedProduct = {
      ...productSelected,
      [name]: value,
    };
    // mise a jour de la modification dans le state interne de linput
    setProductSelected(updatedProduct);

    // pour que la modification soit mis a jour et transferée dans le menu
    handleEdit(updatedProduct , username);

    // puis metre à jour le panier en même temps
    if (name === "price") {
      updateBasketProductPrice(updatedProduct.id, Number(value));
    }
  };


  const handleOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
   setValueOnFocus(e.target.value);
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueOnBlur = e.target.value;
    if (valueOnFocus !== valueOnBlur.trim()) {
      DisplaySuccessMsg()
    }
 
  };


  if (!productSelected.id ) {
    return <HintMessage />
  }

  
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaving ? <SavingMessage /> :<EditInfoMessage />  }
    </Form>
  );
 
}