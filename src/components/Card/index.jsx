import PropTypes from "prop-types";
import { NavLink } from "react-router";
import "../Card/Card.scss";

export default function Card({ title, pictures, id }) {
  return (
    <NavLink to={`/description/${id}`} className="card">
      <img
        src={pictures}
        alt={`Photographie d'un ${title}`}
        className="card__image"
      />
      <h2 className="card__title">{title}</h2>
    </NavLink>
  );
}

Card.propTypes = {
  pictures: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
