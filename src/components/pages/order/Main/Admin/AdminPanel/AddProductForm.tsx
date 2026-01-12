import OrderContext from "../../../../../../context/OrderContext";
import {  useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import SubmitButton from "./SubmitButton";
import Form from "./Form";
import { useDisplaySuccessMsg } from "../../../../../../hooks/useDisplaySuccessMessage";

export default function AddProductForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
 
  const { isSubmitted, DisplaySuccessMsg } = useDisplaySuccessMsg();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      // ...newProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProducttoAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProducttoAdd);
    setNewProduct(EMPTY_PRODUCT);

    DisplaySuccessMsg();
  };


  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
