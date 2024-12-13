import BannerImage from "../../assets/banner-homePage.webp";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { useFetch } from "../../utils/hooks";
import "../HomePage/HomePage.scss";

export default function HomePage() {
  const { data } = useFetch();
  const apartment = data;

  return (
    <div>
      <Banner image={BannerImage} title="Chez vous, partout et ailleurs" />
      <div className="card__container">
        {apartment?.map((list) => (
          <Card
            key={list.id}
            id={list.id}
            pictures={list.cover}
            title={list.title}
          />
        ))}
      </div>
    </div>
  );
}
