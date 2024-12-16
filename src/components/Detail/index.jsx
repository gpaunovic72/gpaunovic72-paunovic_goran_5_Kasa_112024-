import PropTypes from "prop-types";
import StartActive from "../../assets/star-active.webp";
import StartInactive from "../../assets/star-inactive.webp";
import "../Detail/Detail.scss";

export default function Detail({ title, location, tags, rating, host }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="detail">
      <div className="detail__header">
        <h2 className="detail__header--title">{title}</h2>
        <p className="detail__header--location">{location}</p>
      </div>
      <div className="detail__tags">
        {tags.map((tag, index) => (
          <span key={index} className="detail__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="detail__body">
        <div className="detail__rating">
          {range.map((rangeElement, index) =>
            rangeElement >= rating ? (
              <img key={index} src={StartInactive} alt="icone étoile grise" />
            ) : (
              <img key={index} src={StartActive} alt="icone étoile orange" />
            )
          )}
        </div>
        <div className="detail__host">
          <p className="detail__host--name">
            {host.name.split(" ")[0]} <br /> {host.name.split(" ")[1]}
          </p>
          <img
            src={host.picture}
            alt={`Photographie de ${host.name}`}
            className="detail__host--picture"
          />
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.string.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
};
