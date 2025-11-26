import  { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../../context/OrderContext";

export default function NavBarRightSide() {

 const {isModeAdmin , setIsModeAdmin}  = useContext(OrderContext)

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
    setIsModeAdmin();
  }

  

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={onClick}
        labelIfChecked={"DESACTIVER LE MODE ADMIN"}
        labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
      />

      <ToastAdmin />

      <Profile  />
    </NavBarRightSideStyled>
  );
}

export const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.greyDark};
  padding-right: 50px;

`;

