import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import scrollTrigger from 'gsap/ScrollTrigger'
import Buttons from '../utils/Buttons.jsx'
import { carsDetails } from '../assets/contents.jsx';

gsap.registerPlugin(scrollTrigger)

const NewestCar = () => {
  const [slidWith, setSlidWith] = useState(200);
  useEffect(() => {
    let slider = document.querySelectorAll(".cars");
    let icons = document.querySelectorAll('.icons');
    const getSlider = () => {
      slider.forEach((car, i) => {
        car.style.transform = `translateX(-${slidWith}%)`;
        car.style.tranisition = "all 0.22s ease";
      })
    }
    setInterval(() => {
      setSlidWith(slidWith == 200 ? 0 : slidWith + 100);
      getSlider();
    }, 3000);

    return () => {
      clearInterval()
    }

  }, [slidWith])
  

  return (
    <div id='newcars' className='w-full h-screen'>
      <div className='w-full'>
        <p className='text-center text-sm capitalize tracking-wide font-gupter'>checkout the latest cars</p>
        <h1 className='text-center text-3xl uppercase tracking-widest font-gupter font-bold my-2 py-2 after:content-[""] after:block after:h-[2px] after:w-[100px] after:bg-[#2947c0] after:mx-auto after:mt-5 '>newest cars</h1>
      </div>

      <div id='slider' className='w-full  mb-2 flex gap-5 p-2 mt-10 lg:mt-0 overflow-x-hidden'>
        {carsDetails.map((item, index) =>(
           <div key={index} className="cars flex-shrink-0 w-full flex flex-col lg:flex-row">
            <div className='w-full lg:w-3/5 flex items-center justify-center px-10 py-5'>
                <img src={item.img} className="w-1/2 hover:scale-90 transition-all ease-linear duration-300" alt="Car Image Not Found" />
            </div>
            <div className='w-full lg:w-2/5 mx-auto p-5 md:mt-10 lg:mt-0'>
                <h1 className='text-3xl uppercase tracking-widest font-gupter font-bold my-2 py-2'>{item.name}</h1>
                <p className='text-lg tracking-wide font-gupter'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere provident laborum animi? Soluta sequi, accusantium provident explicabo rem consequatur vel quis adipisci doloribus assumenda est illo alias in dolorem excepturi.</p>
                <p className='text-lg ml-5 mt-10 tracking-wide font-gupter'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mx-auto py-10'>
                  <Buttons text={'view details'} />
                </div>
            </div>
        </div>))}
      </div>

      <ul className='w-full  flex items-center justify-center gap-5 py-5'>
        <li className='w-2 h-2 icons cursor-pointer bg-yellow-500 rounded-full'></li>
        <li className='w-2 h-2 icons cursor-pointer bg-yellow-500 rounded-full'></li>
        <li className='w-2 h-2 icons cursor-pointer bg-yellow-500 rounded-full'></li>
      </ul>
      

    </div>
  )
}

export default NewestCar
