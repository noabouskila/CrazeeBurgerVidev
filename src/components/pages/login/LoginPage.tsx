// import React from 'react'
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
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


  ::before {
    content: "";
    background: url("/src/assets/F03 burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: darken;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
