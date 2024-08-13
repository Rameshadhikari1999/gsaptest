import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "../assets/contents.jsx";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  
  useGSAP(() => {
    let allBox = document.querySelectorAll(".allBox");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#service",
        scroller: "body",
        start: "top 20%",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    allBox.forEach((box, i) => {
      tl.to(box, {
        left: `${ window.innerWidth > 768 ? 40 :10}%`,
        borderRadius: 10,
        duration: 1,
        ease: "power3.out",
        opacity: 1,
        rotate: 360,
      });
    });
  }, []);
  return (
    <div id="service" className="w-full h-screen  relative">
      {services.map((service, index) => (
        <div
          key={index}
          className={`allBox bg-[#22242c] text-white w-4/6 lg:w-1/4  h-[60%] absolute top-[20%] left-[17%] lg:left-1/3 rounded-lg flex items-start justify-center flex-col shadow-sm shadow-gray-100 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-1000 p-3 opacity-0 mx-2  
            `}
        >
          <service.icons size={50} />
          <h3 className="text-3xl font-bold capitalize font-gupter py-5">
            {service.name}
          </h3>
          <p>{service.desc}</p>
          <div className="w-14 h-1 bg-blue-500 mx-auto my-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Service;
