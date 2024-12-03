import { NavLink } from "react-router";
import Logo from "../../assets/mobile-logo.webp";
import "../Header/Header.scss";

export default function Header() {
  return (
    <header className="navBar">
      <img src={Logo} alt="logo" className="navBar__logo" />
      <nav className="navBar__link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          ACCUEIL
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          A PROPOS
        </NavLink>
      </nav>
    </header>
  );
}
