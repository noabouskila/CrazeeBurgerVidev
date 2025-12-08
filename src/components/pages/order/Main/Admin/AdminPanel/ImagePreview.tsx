import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource , title }: { imageSource :string ; title : string ;  }) {

    const hasImage = Boolean(imageSource);

  return (
    <ImagePreviewStyled hasImage={hasImage} >
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div> Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}



export const ImagePreviewStyled = styled.div<{ hasImage: boolean }>`
  grid-area: 1/1/4/2;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => (props.hasImage ? withImageStyles : withoutImageStyles)}
`;

const withImageStyles = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

const withoutImageStyles = css`
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  color: ${theme.colors.greySemiDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;


