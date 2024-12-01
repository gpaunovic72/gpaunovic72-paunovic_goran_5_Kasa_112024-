import { NavLink } from "react-router";
import Logo from "../../assets/mobile-logo.png";
import "../Header/Header.scss";

export default function Header() {
  return (
    <header className="headerContainer">
      <img src={Logo} alt="logo" className="headerLogo" />
      <nav className="styleLink">
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
