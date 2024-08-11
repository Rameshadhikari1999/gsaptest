import React, { useEffect, useState } from 'react'
import {IoMenu} from '../../assets/incons.jsx'

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

  return (
    <nav className='w-full flex items-center justify-between lg:justify-around px-5 py-4'>
      {!disWith &&<div className='text-white cursor-pointer'>
        <IoMenu size={40} />
      </div>}
      <div>
        <h1 className='text-white font-gupter text-3xl tracking-widest cursor-pointer'>Car<span className='text-blue-600'>Villa</span></h1>
      </div>
    </nav>
  )
}

export default Nav
