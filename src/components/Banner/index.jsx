import "../Banner/Banner.scss";

export default function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="paysage d'une plage" className="banner__image" />
      <div className="banner__overlay" />
      <h1 className="banner__title">
        {title.split(",")[0]}
        ,<br />
        {title.split(",")[1]}
      </h1>
    </div>
  );
}
