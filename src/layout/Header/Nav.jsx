import React, { useEffect, useState } from 'react'
import {IoMenu} from '../../assets/incons.jsx'
import MobileNav from './MobileNav.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { menu } from '../../assets/contents.jsx';
import NavLink from '../../utils/NavLink.jsx';

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

  // mobile navbar animation 
  let tl = gsap.timeline();
  let deskTl = gsap.timeline();
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
    .from("#close", {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      scale: 0.2,
    })
    tl.pause();
  })
  // desktop navbar animation
  useGSAP(() => {
    deskTl.from("#logo h1", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay:1,
      ease: "power3.out",
    })
    .from("#deskNavLinks", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })
  })
  // mobile navbar handler 
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
      <div id='logo'>
        <h1 className='text-white font-gupter text-3xl tracking-widest cursor-pointer'>Car<span className='text-blue-600'>Villa</span></h1>
      </div>
      {disWith && <ul className='flex justify-end gap-5'>
        {menu.map((item, index) => (
          <li id='deskNavLinks' key={index} className='text-white'>
            <NavLink item={item} />
          </li>
        ))}
        
      </ul>}
    </nav>
  )
}

export default Nav
