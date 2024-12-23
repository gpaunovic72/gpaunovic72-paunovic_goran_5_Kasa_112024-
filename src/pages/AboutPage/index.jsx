import BannerImage from "../../assets/banner-aboutPage.webp";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";
import { useAboutItems } from "../../utils/hooks";
import "../AboutPage/AboutPage.scss";

export default function AboutPage() {
  const { data } = useAboutItems();
  const items = data;

  return (
    <div className="about">
      <div className="about__banner">
        <Banner
          className="about__banner--image"
          image={BannerImage}
          title=""
          overlayClass="about__overlay"
          alt="Photographie paysage de montagne"
        />
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
