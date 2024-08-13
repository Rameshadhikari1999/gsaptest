import React from "react";
import FooterItem from "../utils/FooterItem";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  const aboutDevloon = [
    "about us",
    "careers",
    "terms of service",
    "privacy policy",
  ];
  const topBrands = [
    "BMW",
    "Lamborghini",
    "Camaro",
    "Audi",
    "Infiniti",
    "Nissan",
    "Ferrari",
    "Porsche",
    "Land Rover",
    "Aston Martin",
    "Mercedes",
    "Opel",
  ];
  let conut = 0;
  let getHalfLength = (topBrands.length/2)+1;
//   console.log(getHalfLength);
  return (
    <div id="contact" className="w-full  bg-primary px-5 py-10">
      <div className="flex  items-start justify-between  flex-wrap px-5 ">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="text-white font-gupter text-3xl tracking-widest cursor-pointer">
            Car<span className="text-blue-600">Villa</span>
          </h1>
          <p className="font-gupter text-xl py-4 pr-2">
            Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut
            enim ad minim veniam.
          </p>
          <p className="font-gupter text-lg text-gray-400">
            rameshadhikari199917@gmail.com
          </p>
          <p className="font-gupter text-lg text-gray-400">+977-9707929963</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="text-white uppercase font-gupter text-2xl tracking-widest cursor-pointer  pb-2">
            about devloon
          </h1>
          <ul className="w-full">
            {aboutDevloon.map((item, index) => (
              <FooterItem key={index} text={item} />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="text-white uppercase font-gupter text-2xl tracking-widest cursor-pointer">
            top brands
          </h1>
          <div className="w-full">
            {topBrands.slice(0, getHalfLength).map((item, index) => (
                <ul key={index} className="flex items-center justify-between pr-10">
                      <FooterItem text={topBrands[index]} />
                      <FooterItem text={topBrands[(index+getHalfLength)-1]} />
                </ul>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="text-white font-gupter uppercase text-2xl tracking-widest cursor-pointer">
            countact me
          </h1>
          <p className="font-gupter text-xl text-gray-500 py-4 pr-2">
            Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut
            enim ad minim veniam.
          </p>
          <div className="w-full border-[1px] border-gray-500 flex rounded">
          <input className="w-[90%] border-none outline-none p-2 bg-transparent text-2xl font-gupter"  type="text" />
          <BsFillSendFill className="text-5xl cursor-pointer shadow-sm shadow-gray-500 text-blue-500 p-2" />
          </div>
        </div>
      </div>
      <p className="font-gupter text-lg text-gray-400 text-center pt-10">copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
