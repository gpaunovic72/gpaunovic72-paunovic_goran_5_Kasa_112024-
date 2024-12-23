import { NavLink } from "react-router";
import Error from "../../assets/404.webp";
import "../ErrorPage/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <section className="error">
      <img
        className="error__img"
        src={Error}
        alt="Erreur 404 : Page non trouvée"
      />
      <p className="error__description">
        Oups! La page que <br />
        vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error__link">
        Retouner sur la page d'accueil
      </NavLink>
    </section>
  );
}
