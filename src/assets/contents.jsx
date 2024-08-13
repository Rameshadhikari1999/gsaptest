import { FaCar, BiSolidCarMechanic, IoDocumentText } from "./incons.jsx";
import img1 from '../assets/images/new-cars-model/ncm1.png'
import img2 from '../assets/images/new-cars-model/ncm2.png'
import img3 from '../assets/images/new-cars-model/ncm3.png'
import fc1 from '../assets/images/featured-cars/fc1.png'
import fc2 from '../assets/images/featured-cars/fc2.png'
import fc3 from '../assets/images/featured-cars/fc3.png'
import fc4 from '../assets/images/featured-cars/fc4.png'
import fc5 from '../assets/images/featured-cars/fc5.png'
import fc6 from '../assets/images/featured-cars/fc6.png'
import fc7 from '../assets/images/featured-cars/fc7.png'
import fc8 from '../assets/images/featured-cars/fc8.png'
import client1 from '../assets/images/clients/c1.png'
import client2 from '../assets/images/clients/c2.png'
import client3 from '../assets/images/clients/c3.png'

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

const featuredCarsDetails = [
  {
    id: 1,
    name: "BMW 6-series gran coupe",
    img: fc1,
    price: "Rs. 1,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 2,
    name: "chevrolet camaro wmv20",
    img: fc2,
    price: "Rs. 5,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 3,
    name: "lamborghini v520",
    img: fc3,
    price: "Rs. 8,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 4,
    name: "audi a3 sedan",
    img: fc4,
    price: "Rs. 10,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 5,
    name: "infiniti z5",
    img: fc5,
    price: "Rs. 12,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 6,
    name: "porsche 718 cayman",
    img: fc6,
    price: "Rs. 5,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 7,
    name: "bmw 8-series coupe",
    img:fc7,
    price: "Rs. 5,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
  {
    id: 8,
    name: "BMW xseries-6",
    img:fc8,
    price: "Rs. 5,00,000",
    desc:"neque porro quisquaim est, qui dolorem ipsum quia dolor site amet, consectetur, adipisci velit, sed quia non."
  },
]

const client = [
  {
    id: 1,
    name: "John Deo",
    city:"Kathmandu",
    img: client1,
  },
  {
    id: 2,
    name: "Mohani Yoadav",
    city:"Pokhara",
    img: client2,
  },
  {
    id: 3,
    name: "Gaurav Jha",
    city:"Dilhi",
    img: client3,
  },
];

export { menu, searchWithKey, services, carsDetails, featuredCarsDetails, client };
