import BannerImage from "../../assets/banner-aboutPage.webp";
import Dropdown from "../../components/Dropdown";
import { useAboutItems } from "../../utils/hooks";
import "../AboutPage/AboutPage.scss";

export default function AboutPage() {
  const { data } = useAboutItems();
  const items = data;

  return (
    <div className="about">
      <div className="about__banner">
        <img
          className="about__banner--image"
          src={BannerImage}
          alt="Photographie paysage de montagne"
        />
        <div className="about__banner--overlay" />
      </div>
      <div className="about__content">
        {items.map((item, index) => (
          <Dropdown
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
