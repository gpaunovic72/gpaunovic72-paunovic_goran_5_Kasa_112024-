import BannerImage from "../../assets/banner-aboutPage.webp";
import "../AboutPage/AboutPage.scss";

export default function AboutPage() {
  return (
    <div className="container">
      <img
        className="container__banner"
        src={BannerImage}
        alt="Photographie paysage de montagne"
      />
      <div className="container__overlay" />
    </div>
  );
}
