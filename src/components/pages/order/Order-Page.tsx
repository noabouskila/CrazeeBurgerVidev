import { useLocation, useNavigate } from "react-router-dom";


export default function OrderPage() {

    const location = useLocation();
    const prenom = location.state?.prenom || "invité";
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

  return (
   <div>
    <h1>Bienvenue {prenom}</h1>
    <button type="button" onClick={handleClick}>
        Déconnexion
    </button>
   </div>
  )
}
