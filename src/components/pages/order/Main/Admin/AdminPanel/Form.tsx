import type { FormType } from "../../../../../../types/types";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getTextInputConfig } from "./getTextInputConfig";
import { forwardRef } from "react";


const Form = forwardRef<HTMLInputElement, FormType>(
  ({ product, onChange, onSubmit, onFocus , onBlur , children }, ref) => {
    const TextInputs = getTextInputConfig(product);

    return (
      <ProductFormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />

        <div className="input-fields">
          {TextInputs.map((input) => (
            <TextInput
              key={input.id}
              {...input}
              version="minimalist"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>

        {children && <div className="submit">{children}</div>}
      </ProductFormStyled>
    );
  }
);

Form.displayName = "Form";
export default Form;

export const ProductFormStyled = styled.form`
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
