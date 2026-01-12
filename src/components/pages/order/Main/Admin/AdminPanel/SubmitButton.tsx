import Button from "../../../../../reusable-ui/Button"
import SubmitMessage from "./SubmitMessage"


export default function SubmitButton({isSubmitted}: {isSubmitted: boolean}) {
  return (
   <>
        <Button label="Ajouter un nouveau produit au menu" version="success" />
        {isSubmitted && <SubmitMessage />}
   </>
  )
}
