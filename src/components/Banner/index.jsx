import "../Banner/Banner.scss";

export default function Banner({
  image,
  title,
  splitTitle = true,
  overlayClass,
}) {
  return (
    <div className="banner">
      <img src={image} alt="paysage d'une plage" className="banner__image" />
      <div className={`banner__overlay ${overlayClass || ""}`} />
      <h1 className="banner__title">
        {splitTitle && title.includes(",") ? (
          <div>
            {title.split(",")[0]}
            ,<br />
            {title.split(",")[1]}
          </div>
        ) : (
          title
        )}
      </h1>
    </div>
  );
}
