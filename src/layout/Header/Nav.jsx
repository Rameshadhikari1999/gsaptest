import React, { useEffect, useState } from 'react'
import {IoMenu} from '../../assets/incons.jsx'
import MobileNav from './MobileNav.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = () => {
  const [disWith, setDisWith] = useState(window.innerWidth > 768 ? true : false);


  // traking display width and set disWith 
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDisWith(window.innerWidth > 768 ? true : false);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setDisWith(window.innerWidth > 768 ? true : false);
      });
    };
  }, []);

  let tl = gsap.timeline();
  useGSAP(() => {
    tl.to("#navContainer", {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    tl.from("#navLinks",{
        x:-100,
        opacity:0,
        duration:0.5,
        ease:"steps(12)",
        stagger:0.2
    })
    tl.pause();
  })

  const handleOpen = () => {
    tl.play();
  }
  const handleClose = () => { 
    tl.reverse();
  }
    

  return (
    <nav className='w-full flex items-center justify-between lg:justify-around'>
      <MobileNav onClose={handleClose} />
      {!disWith &&<div className='text-white cursor-pointer'>
        <IoMenu size={40} onClick={handleOpen} />
      </div>}
      <div>
        <h1 className='text-white font-gupter text-3xl tracking-widest cursor-pointer'>Car<span className='text-blue-600'>Villa</span></h1>
      </div>
    </nav>
  )
}

export default Nav
