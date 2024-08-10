import React from "react";
import Buttons from "../../utils/Buttons.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

  // animation for hero
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#hero h1", {
      opacity: 0,
      duration: 0.5,
      delay: 3,
      scale: 0.1,
      ease: "bounce.out",
    })
    .from("#hero p", {
      x:-100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .from("#hero #heroBtn", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });


  return (
    <div className='w-full h-screen bg-[url("./assets/images/welcome-hero/welcome-banner.jpg")] bg-cover bg-center'>

      <div id="hero" className="w-full h-full bg-blue-950/50 flex items-center justify-center flex-col pt-10">

        <h1 className=" text-2xl md:text-4xl text-center font-bold text-white uppercase">
          get your desired car in resonable price
        </h1>

        <p className="text-white text-lg w-3/4 lg:w-1/2 text-center py-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

      <div id="heroBtn">
        <Buttons  text="Contact us" />
      </div>

      </div>
    </div>
  );
};

export default Hero;
