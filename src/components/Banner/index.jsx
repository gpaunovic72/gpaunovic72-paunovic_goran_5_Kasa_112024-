import "../Banner/Banner.scss";

export default function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="paysage d'une plage" className="banner__image" />
      <div className="banner__overlay" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}
