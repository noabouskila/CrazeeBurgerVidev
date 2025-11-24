import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast, ToastContainer } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";

export default function NavBarRightSide({ username }: { username: string }) {

  const [isModeAdmin, setIsModeAdmin ] =  React.useState(false);

  const displayToastNotification  = () =>{
    if(!isModeAdmin){
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const onClick = () => {
    console.log("toggle clicked");
    displayToastNotification();
    setIsModeAdmin(!isModeAdmin);
  }

  

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={onClick}
        labelIfChecked={"ACTIVER LE MODE ADMIN"}
        labelIfUnchecked={"DESACTIVER LE MODE ADMIN"}
      />

      <ToastContainer className="toaster" toastClassName="body-toast" />

      <Profile username={username} />
    </NavBarRightSideStyled>
  );
}

export const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.greyDark};
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;

