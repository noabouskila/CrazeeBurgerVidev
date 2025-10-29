// import React from 'react'
import LoginForm from "./LoginForm";
import styled from "styled-components";
import LogoCrazeeBurger  from "/src/assets/F03 logo.png";
import  { theme }  from "../../../theme";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      {/* <Logo/> */}
      <div className="logo">
        <span>CRAZEE</span>
        <img src={LogoCrazeeBurger} alt="Image du Logo de Crazee Burger" />
        <span>BURGER</span>
      </div>

      <LoginForm />
    </LoginPageStyled>
  );
}

export const LoginPageStyled = styled.div`
  background-image: url("/src/assets/F03 burger-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh; /* ← prend TOUTE la hauteur de l’écran */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  background-blend-mode: darken;

  .logo {
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;

    img {
      width: 200px;
      height: 150px;
    }

    span {
      font-family: Amatic SC;
      font-weight: 700;
      /* font-style: Bold; */
      font-size: 110px;
      line-height: 0px;
      letter-spacing: 1.5px;
      text-align: center;
      vertical-align: middle;
      text-transform: uppercase;
    }
  }
`;
