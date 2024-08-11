import Nav from "../../layout/Header/Nav.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.to("#mainNav",{
      backgroundColor: "rgba(0,0,0,1)",
      scrollTrigger: {
        trigger: "#home",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub:true,
      },
    })
  })
  return (
    <div
      id="home"
      className='w-[100%] mx-auto h-screen bg-[url("./assets/images/welcome-hero/welcome-banner.jpg")] bg-cover bg-center'
    >
      <div
        className="w-full h-full bg-blue-950/50"
      >
        <div id="mainNav" className="w-full fixed top-0 left-0 px-10 py-5">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Hero;
