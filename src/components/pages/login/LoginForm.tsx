import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../../theme";
import { FaRegUserCircle } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";



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

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPrenom(e.target.value);
  };

  // render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous </h2>
      <div>
        <div className="btnInput">
          <FaRegUserCircle />
          <input
            type="text"
            value={prenom}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button type="submit">
          Accéder à mon espace <SlArrowRight/>
        </button>
      </div>
    </LoginFormStyled>
  );
}



export const LoginFormStyled = styled.form`
  font-family: "Open Sans", sans-serif;
  font-weight: medium 500;

  h1 {
    color: ${theme.colors.white};
    font-family: Amatic SC;
    font-weight: 700;
    font-family: Amatic SC;
    font-weight: 700;
    font-style: Bold;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
  }

  hr {
    border: none; /* supprime le style par défaut */
    height: 2px;
    background-color: ${theme.colors.primary};
  }

  h2 {
    color: ${theme.colors.white};
    text-align: center;
    font-family: Amatic SC;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 20px;
    button {
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

    button:hover , button:focus , button:active {
      cursor: pointer;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    div.btnInput {
      background-color: ${theme.colors.white};
      border-radius: 5px;
      padding-top: 18px;
      padding-right: 24px;
      padding-bottom: 18px;
      padding-left: 24px;
      margin-bottom: 20px;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      svg {
        color: ${theme.colors.greyDark};
      }

      input {
        border: none;
        font-size: ${theme.fonts.P0};

        /* ::placeholder {
          color: ${theme.colors.greyLight};
        } */
      }
      input:focus , input:hover, input:active {
        outline: none;
      }
    }
  }
`;




