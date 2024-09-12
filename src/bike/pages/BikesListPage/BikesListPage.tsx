import BikeCard from "../../components/BikeCard/BikeCard";
import { Bike } from "../../types";
import "./BikesListPage.css";

const bike: Bike = {
  brand: "Canyon",
  model: "Ultimate CF SL 8",
  alternativeText: "Bicicleta de carretera Canyon Ultimate CF SL 8 de carbono",
  imageUrl:
    "https://media.discordapp.net/attachments/1251168904190103625/1283444522663284887/canyon-cf-sl-8_1.webp?ex=66e3045b&is=66e1b2db&hm=1aef36e2c992b8e098cf541ccd73f2bad34fc39e9765e48fbf8a840463d29bbf&=&format=webp",
  mode: "Carretera",
  id: "",
  wheelsize: 0,
  material: "",
  specs: "",
};

const BikesListPage = (): React.ReactElement => {
  return (
    <main className="page-container">
      <h1 className="page-container__title">Lista de bicis</h1>
      <BikeCard bike={bike} />
    </main>
  );
};

export default BikesListPage;
