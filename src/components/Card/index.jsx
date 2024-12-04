import PropTypes from "prop-types";
import "../Card/Card.scss";

export default function Card({ title }) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
