import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Carousel from "../../components/Carousel";
import Detail from "../../components/Detail";
import Dropdown from "../../components/Dropdown";
import { useFetch } from "../../utils/hooks";
import "../DescriptionPage/DescriptionPage.scss";

export default function DescriptionPage() {
  const { data } = useFetch();
  const { id } = useParams();
  const navigate = useNavigate();
  const slider = data.find((slider) => slider.id === id);

  useEffect(() => {
    if (data.length > 0 && !slider) {
      navigate("*");
    }
  }, [data, slider, navigate]);

  if (!slider) {
    return null;
  }

  return (
    <div className="fiche">
      <div className="fiche__carousel">
        <Carousel pictures={slider.pictures} />
      </div>
      <div>
        <Detail
          title={slider.title}
          location={slider.location}
          tags={slider.tags}
          rating={slider.rating}
          host={slider.host}
        />
      </div>
      <div className="fiche__dropdown">
        <Dropdown title="Description" description={slider.description} />
        <Dropdown title="Equipements" description={slider.equipments} />
      </div>
    </div>
  );
}
