import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "../../reusable-ui/Button";
import { authenticatUser } from "../../../api/user";
import Welcome from "./Welcome";


export default function LoginForm() {
  //state
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  // logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await authenticatUser(prenom);
      setPrenom("");
      navigate(`/orderPage/${result?.username}`);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'authentification de l'utilisateur");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrenom(e.target.value);
  };

  // render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />

      <div className="inputContainer">
        <TextInput
          value={prenom}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<FaRegUserCircle />}
        />
        <Button
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="iconButton" />}
          version="primary"
        />
      </div>
    </LoginFormStyled>
  );
}

export const LoginFormStyled = styled.form`
  font-family: "Amatic SC", cursive;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem ${theme.spacing.lg};

 

  div.inputContainer {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;

    .iconButton {
      margin-left: 10px;
      margin-top: ${theme.gridUnit / 4}px;
      font-size: ${theme.fonts.size.SM};
    }
  }
`;
