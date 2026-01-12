import HintMessage from "./HintMessage";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

export default function EditProductForm() {

  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext);
 
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

  if (!productSelected.id ) {
    return <HintMessage />
  }
  
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
 
}