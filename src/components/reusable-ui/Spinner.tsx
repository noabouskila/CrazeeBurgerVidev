import React from "react";
import { ClipLoader } from "react-spinners"; // spinner rond classique
import styled from "styled-components";

interface SpinnerProps {
  size?: number; // taille du spinner
  color?: string; // couleur
  label?: string; // texte sous le spinner
}

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px; /* hauteur pour centrer dans ton menu */
  width: 100%;
`;

const SpinnerLabel = styled.span`
  margin-top: 15px;
  font-size: 16px;
  color: #555;
`;

const Spinner: React.FC<SpinnerProps> = ({
  size = 60,
  color = "#007bff",
  label,
}) => {
  return (
    <SpinnerWrapper>
      <ClipLoader size={size} color={color} />
      {label && <SpinnerLabel>{label}</SpinnerLabel>}
    </SpinnerWrapper>
  );
};

export default Spinner;
