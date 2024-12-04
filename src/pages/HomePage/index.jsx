import BannerImage from "../../assets/banner-homePage.webp";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { annoncesList } from "../../datas/annoncesList";
import "../HomePage/HomePage.scss";

export default function HomePage() {
  return (
    <div>
      <Banner image={BannerImage} title="Chez vous, partout et ailleurs" />
      <div className="card__container">
        {annoncesList.map((list, index) => (
          <Card key={`${list.id}-${index}`} title={list.title} />
        ))}
      </div>
    </div>
  );
}
