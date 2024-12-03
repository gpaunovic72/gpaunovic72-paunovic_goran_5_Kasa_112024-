import Banner from "../../components/Banner";
import BannerImage from "../../assets/banner-homePage.webp";

export default function HomePage() {
  return (
    <div>
      <Banner image={BannerImage} title="Chez vous, partout et ailleurs" />
    </div>
  );
}
