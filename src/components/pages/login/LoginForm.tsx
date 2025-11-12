import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../../theme";
import { SlArrowRight } from "react-icons/sl";
import TextInput from "./TextInput";
import { FaRegUserCircle } from "react-icons/fa";



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
        />
        <button type="submit">
          <span> Accéder à mon espace </span>
          <SlArrowRight />
        </button>
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
  padding: 2.5rem 2rem;

  div.titleLogin {
    h1 {
      color: ${theme.colors.white};
      font-size: 48px;
    }

    hr {
      border: none; /* supprime le style par défaut */
      height: 2px;
      background-color: ${theme.colors.primary};
      margin-bottom: 40px;
    }

    h2 {
      color: ${theme.colors.white};

      font-size: 36px;
      text-align: center;
      margin: 10px 10px 10px;
    }
  }

  div.inputContainer {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;
    button {
      font-family: "Open Sans", sans-serif;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.P0};
      width: 400px;
      height: 53px;
      opacity: 1;
      top: 345.31px;
      left: 32px;
      border-radius: 5px;
      border-width: 1px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      svg {
        width: 10px;
        margin-left: 5px;
        margin-top: 2px;
      }
    }

    button:hover,
    button:focus,
    button:active {
      cursor: pointer;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    
  }
`;




