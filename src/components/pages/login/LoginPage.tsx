// import React from 'react'
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"}/>
      <LoginForm />
    </LoginPageStyled>
  );
}

export const LoginPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("/assets/F03-BURGER-BACKGROUND.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

  .logo-login-page {
    transform: scale(2.5);
    margin-bottom: 3%;
  }
`;
