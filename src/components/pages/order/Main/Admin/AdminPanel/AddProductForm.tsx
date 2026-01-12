import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import SubmitButton from "./SubmitButton";
import Form from "./Form";

export default function AddProductForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    displaySuccessMsg();
  };

  const displaySuccessMsg = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
