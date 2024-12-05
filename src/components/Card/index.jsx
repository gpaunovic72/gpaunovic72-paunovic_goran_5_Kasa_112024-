import PropTypes from "prop-types";
import "../Card/Card.scss";

export default function Card({ pictures, title }) {
  return (
    <div className="card">
      <img
        src={pictures}
        alt={`Photographie d'un ${title}`}
        className="card__image"
      />
      <h2 className="card__title">{title}</h2>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
