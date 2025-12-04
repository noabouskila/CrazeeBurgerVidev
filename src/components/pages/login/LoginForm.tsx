import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { FaRegUserCircle } from "react-icons/fa";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
  //state
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  // logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPrenom("");
    navigate(`/orderPage/${prenom}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrenom(e.target.value);
  };

  // render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="titleLogin">
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez vous </h2>
      </div>

      <div className="inputContainer">
        <TextInput
          value={prenom}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<FaRegUserCircle />}
          className="input-login"
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="iconButton" />}
          className="primary-button-login-form"
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

  div.titleLogin {
    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.P5};
    }

    hr {
      border: none; /* supprime le style par défaut */
      height: 2px;
      background-color: ${theme.colors.loginLine};
      margin-bottom: ${theme.gridUnit * 5}px;
    }

    h2 {
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.P4};
      text-align: center;
      margin: 10px 10px 10px;
    }
  }

  div.inputContainer {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;

    .input-login {
      margin: 18px 0;
    }

    .iconButton {
      margin-left: 10px;
      margin-top: ${theme.gridUnit / 4}px;
      font-size: ${theme.fonts.size.SM};
    }

    .primary-button-login-form {
      width: 400px;
      height: 53px;
    }
  }
`;
