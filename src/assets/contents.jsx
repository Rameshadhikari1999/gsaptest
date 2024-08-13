import { FaCar, BiSolidCarMechanic, IoDocumentText } from "./incons.jsx";
import img1 from '../assets/images/new-cars-model/ncm1.png'
import img2 from '../assets/images/new-cars-model/ncm2.png'
import img3 from '../assets/images/new-cars-model/ncm3.png'

const menu = [
  "Home",
  "Service",
  "feature cars",
  "new cars",
  "brands",
  "contact",
];
const searchWithKey = [
  {
    id: 1,
    name: "Select year",
    selectOpt: [
      "Select year",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
    ],
  },
  {
    id: 2,
    name: "Select make",
    selectOpt: [
      "Select make",
      "Audi",
      "BMW",
      "Chevrolet",
      "Dodge",
      "Fiat",
      "Ford",
      "Honda",
      "Hyundai",
      "Jaguar",
      "Kia",
      "Land Rover",
    ],
  },
  {
    id: 3,
    name: "Select model",
    selectOpt: ["Select model", "Kia-Rio", "mutsubishi", "Ford", "Honda"],
  },
  {
    id: 4,
    name: "body style",
    selectOpt: ["Select body style", "Sedan", "Hatchback", "SUV"],
  },
  {
    id: 5,
    name: "car condition",
    selectOpt: ["Select car condition", "New", "Used"],
  },
  {
    id: 6,
    name: "price range",
    selectOpt: [
      "Select price range(Rs.)",
      "10,000-20,000",
      "20,000-30,000",
      "30,000-40,000",
    ],
  },
];

const services = [
  {
    id: 1,
    name: "largest dealership of car",
    icons: FaCar,
    desc: "We have the largest selection of new and used cars in Nepal and across the country. Our inventory is always growing and we are always looking for ways to improve our service.",
  },
  {
    id: 2,
    name: "unlimited repair warranty",
    icons: BiSolidCarMechanic,
    desc: "We have a 100% money back guarantee. If you are not satisfied with your car, we will refund you the full amount.",
  },
  {
    id: 3,
    name: "insurance support",
    icons: IoDocumentText,
    desc: "We offer a free car insurance quote. If you are not satisfied, we will refund you the full amount.",
  },
];

const carsDetails = [
  {
    id: 1,
    name: "chevrolet camaro ZA100",
    img: img1,
  },
  {
    id: 2,
    name: "BMW Series-3 Wagon",
    img: img2,
  },
  {
    id: 3,
    name: "Ferrari 812 Superfast",
    img: img3,
  },
];
export { menu, searchWithKey, services, carsDetails };
