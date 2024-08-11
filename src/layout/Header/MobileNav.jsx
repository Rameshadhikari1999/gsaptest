import React, { useRef } from 'react'
import {IoCloseSharp} from '../../assets/incons.jsx'
import { menu } from '../../assets/contents.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const MobileNav = ({ onClose, navRef}) => {
  return (
    <div id='navContainer' className='w-screen h-[90vh] absolute top-0 left-0 -translate-y-[90vh] bg-black/90 opacity-0'>
      <div className='absolute top-8 left-10 p-2 text-white font-bold bg-red-400/40 rounded-full'>
        <IoCloseSharp size={50} onClick={onClose}/>
      </div>
      <div className='w-full h-full flex items-center justify-center'>
            <ul ref={navRef} className='text-white'>
                {menu.map((item, index) => (
                    <li key={index} className='font-bold text-xm uppercase tracking-wide p-2 cursor-pointer hover:text-blue-400 hover:scale-[90%] transition-all ease-linear duration-300 font-gupter -translate-x-10 opacity-0 '>{item}</li>
                ))}
            </ul>
      </div>
    </div>
  )
}

export default MobileNav
