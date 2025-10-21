import { Link, useLocation} from "react-router-dom";


export default function OrderPage() {

    const location = useLocation();
    const prenom = location.state?.prenom || "invité";
 

  return (
    <div>
      <h1>Bienvenue {prenom}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
