import Nav from "../../layout/Header/Nav.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Buttons from "../../utils/Buttons.jsx";
import { searchWithKey } from "../../assets/contents.jsx";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const [searchKey, setSearchKey] = useState({
    year:"",
    Make:"",
    model:"",
    style:"",
    brand:"",
    price:"",
  });

  const handelSearch = () => {
    console.log("ok");
    console.log("searchKey",searchKey);
  };

  // hero animation
  useGSAP(() => {
    gsap.to("#mainNav", {
      backgroundColor: "rgba(0,0,0,1)",
      scrollTrigger: {
        trigger: "#home",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    let tl = gsap.timeline();
    tl.from("#heroContent h1", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay:1.5,
      ease: "power3.out",
      // stagger: 0.2,
    });
    tl.from("#heroContent p", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay:0.1,
      ease: "power3.out",
      // stagger: 0.2,
    });
    tl.from("#getStarted", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay:0.1,
      ease: "power3.out",
      // stagger: 0.2,
    });
  });


  return (
    <>
    <div
      id="home"
      className='w-[100%] mx-auto h-screen bg-[url("./assets/images/welcome-hero/welcome-banner.jpg")] bg-cover bg-center'
    >
      <div className="w-full h-full bg-blue-950/50">

        <div id="mainNav" className="w-full fixed top-0 left-0 px-10 py-5 z-10">
          <Nav />
        </div>

        <div className="pt-16 w-full h-[90%]">
          <div id="heroContent" className=" w-full h-full flex items-center justify-center gap-5 flex-col">
            <h1 className="text-white text-2xl md:text-4xl tracking-wider px-5 text-center  font-bold capitalize font-gupter">
              get your desired car in resonable price
            </h1>
            <p className="w-5/6 lg:w-1/2 mx-auto md:text-lg lg:text-xl py-10 text-white font-gupter text-center tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div id="getStarted">
              <Buttons text="Get Started" onClick={handelSearch} />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="w-[90%] mx-auto bg-white h-[80vh] lg:h-[60vh] -translate-y-24 shadow-sm shadow-gray-400 rounded flex justify-between flex-wrap">
      {searchWithKey.map((item, index) => (
        <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 h-[14%] lg:h-1/4 my-auto flex items-center justify-center flex-col shrink-0">
          <label
            htmlFor={item.name.toLowerCase()}
            className="w-3/4 mx-auto text-xl tracking-wide font-bold text-gray-900 font-gupter capitalize"
          >
            {item.name}
          </label>
          <select
            name={item.name.toLowerCase()}
            id={item.name.toLowerCase()}
            value={searchKey[index - 1]}
            onChange={(e) => setSearchKey({ ...searchKey[index -1], [index - 1]: e.target.value })}
            className="w-3/4 mx-auto outline-none border-none text-lg capitalize text-gray-400 font-gupter bg-transparent p-2 rounded"
          >
            {item.selectOpt.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
        <div className="w-full h-[18%] lg:h-1/4 flex items-center justify-center flex-col">
          <Buttons text="Search" />
        </div>
      </div>
    </>
  );
};

export default Hero;
