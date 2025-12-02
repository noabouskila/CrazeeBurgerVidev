import styled from "styled-components";


export default function AddProductForm() {
  return (
    <AddProductFormStyled>
      <div className="image-prevew">
        image preview
        {/* <image src="" alt="" /> */}
      </div>

     
        <div className="input-fields">
        <input type="text" placeholder="Nom du Produit ( ex: Super Burger)" />
        <input
            type="text"
            placeholder="Lien URL d'un image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input type="number" placeholder="Prix" />
        </div>

        <div className="submit-button">
            <button type="submit">Ajouter un nouveau produit au menu</button>
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
    background-color: red;
  }

  .input-fields {
    background-color: blue;
    grid-area: 1/2/-2/3;
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-button {
    background-color: green;
    grid-area: 4/-2/-1/-1;
  }
`;
