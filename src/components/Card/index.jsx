import PropTypes from "prop-types";
import "../Card/Card.scss";

export default function Card({ title, pictures }) {
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
  pictures: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
