import { useNavigate, useParams } from "react-router";
import Carousel from "../../components/Carousel";
import { useFetch } from "../../utils/hooks";
import "../DescriptionPage/DescriptionPage.scss";

export default function DescriptionPage() {
  const { data } = useFetch([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const slider = data.find((slider) => slider.id === id);

  if (!slider) {
    navigate("*");
    return;
  }

  return (
    <div className="fiche">
      <div className="fiche__carousel">
        <Carousel pictures={slider.pictures} />
      </div>
    </div>
  );
}
