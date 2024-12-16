import PropTypes from "prop-types";
import { useState } from "react";
import VectorNext from "../../assets/Vector-next.webp";
import VectorPrev from "../../assets/Vector-prev.webp";
import "./Carousel.scss";

export default function Carousel({ pictures }) {
  const [indexBtn, setIndexBtn] = useState(0);

  const prevSlide = () => {
    setIndexBtn((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndexBtn((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="slider">
      <img
        src={pictures[indexBtn]}
        alt={`Photographie ${indexBtn + 1}`}
        className="slider__image"
      />
      <div className="slider__overlay" />
      {pictures.length > 1 && (
        <div>
          <div className="slider__btn">
            <button className="slider__btn--prev" onClick={prevSlide}>
              <img src={VectorPrev} alt="icone boutton prev" />
            </button>
            <button className="slider__btn--next" onClick={nextSlide}>
              <img src={VectorNext} alt="icone boutton next" />
            </button>
          </div>
          <div className="slider__countdown">
            <p>
              {indexBtn + 1} / {pictures.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
