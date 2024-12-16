import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../../assets/Vector.webp";
import "../Dropdown/Dropdown.scss";

export default function Dropdown({ title, description }) {
  const [active, setActive] = useState(false);
  const toggleDropdown = () => setActive(!active);
  return (
    <div className="dropdown">
      <div className="dropdown__header">
        <h3 className="dropdown__title">{title}</h3>
        <button className="dropdown__button" onClick={toggleDropdown}>
          <img
            src={Vector}
            alt="Icône du bouton"
            className={active ? "rotated" : ""}
          />
        </button>
      </div>
      <div className={`dropdown__content ${active ? "actives" : ""}`}>
        {Array.isArray(description) ? (
          <ul className="dropdown__list">
            {description.map((item, index) => (
              <li key={index} className="dropdown__list--item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className={`dropdown__text ${active ? "actives" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string), // Accepte un tableau de chaînes
  ]).isRequired,
};
