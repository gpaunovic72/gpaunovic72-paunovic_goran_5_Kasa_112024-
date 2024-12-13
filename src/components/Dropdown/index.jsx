import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../../assets/Vector.webp";
import "../Dropdown/Dropdown.scss";

export default function Dropdown({ title, description }) {
  const [active, setActive] = useState(false);
  const toggleDropdown = () => setActive(!active);
  return (
    <div>
      <div className="about__item">
        <h3 className="about__item--title">{title}</h3>
        <button className="about__item--button" onClick={toggleDropdown}>
          <img
            src={Vector}
            alt="Icône du bouton"
            className={active ? "rotated" : ""}
          />
        </button>
      </div>
      <div className={`about__description ${active ? "actives" : ""}`}>
        <p className={`about__description--items ${active ? "actives" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
