import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">
        <button>Retourner vers la page d'accueil</button>
      </Link>
    </div>
  );
}
