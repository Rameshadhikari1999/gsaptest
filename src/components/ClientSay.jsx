import React from "react";
import SectionHeader from "../utils/SectionHeader.jsx";
import { client } from "../assets/contents.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const ClientSay = () => {
  useGSAP(() => {
      let tl = gsap.timeline({
          scrollTrigger: {
              scroller: "body",
              trigger: "#client",
              start: "top center",
              end: "bottom top",
              scrub: true,
              markers: true,
              pin: true,
          },
      });

      tl.from("#client", {
          x: "-200%",
          delay: 0.5,
          stagger: 0.5,
          ease:"power3.out",
          duration: 1,
      });
  })

  return (
    <div className="w-full py-10 px-2">
      <SectionHeader title="what our clients say" />

      <div
        id="client"
        className="w-screen h-full mt-10 flex"
      >
        {client.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 flex items-center justify-center`}
          >
            <div className="shadow-sm w-full lg:w-1/4 bg-primary rounded shadow-orange-200  p-5 hover:scale-105 transition-all ease-linear duration-300">

              <div className="w-10 mx-auto h-10 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={item.img}
                />
              </div>
              <p className="text-justify font-gupter text-lg m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repellendus accusamus saepe porro corrupti numquam recusandae,
                delectus voluptates a, iste rerum consectetur aliquid soluta est
                expedita cupiditate facere unde temporibus.
              </p>

              <h3 className="text-lg font-gupter font-bold text-center text-gray-500">
                {item.name}
              </h3>
              <h3 className="text-lg font-gupter font-bold text-center text-gray-500">
                {item.city}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSay;
