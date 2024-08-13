import React from "react";
import SectionHeader from "../utils/SectionHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";
import { featuredCarsDetails } from "../assets/contents";

gsap.registerPlugin(scrollTrigger);

const FeatureCar = () => {
  useGSAP(() => {
    gsap.to("#featured",
      {
        x: "-100%",
        scrollTrigger: {
          trigger: "#featured",
          start: "top center",
          end: "bottom center",
          scrub: true,
          // pin: true,
        },
      }
    );
  });
  return (
    <div id="featurecars" className="w-full  p-10 px-5">
      <SectionHeader
        title="Featured cars"
        subTitle="checkout the featured cars"
      />

      <div
        id="featured"
        className="w-full h-full  p-5 flex items-center justify-center gap-5"
      >
        {featuredCarsDetails.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 ">
          <div className="shadow-sm shadow-orange-200 rounded">
            <div className="w-full p-2">
              <img src={item.img} className="w-full" alt="" />
            </div>
            <div className=" p-2 border-t-[1px] border-b-[1px] border-[#979db6]">
              <p className=" font-gupter  rounded">
                Model:
                <span className="pl-4">2017</span>{" "}
                <span className="pl-4">3100MI</span>{" "}
                <span className="pl-4">240PH</span>
              </p>
              <p className=" font-gupter  rounded">Automatic</p>
            </div>
          </div>
          <div className="p-2">
            <h4 className="font-gupter text-xl mt-5 tracking-wide text-gray-400">{item.name}</h4>
            <p className="font-gupter text-xl font-bold text-blue-200">{item.price}</p>
            <p className="font-gupter text-bss
            ">{item.desc}</p>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default FeatureCar;
