import React, { useRef } from "react";
import { IoCloseSharp } from "../../assets/incons.jsx";
import NavLink from "../../utils/NavLink.jsx";
import {menu} from '../../assets/contents.jsx'

const MobileNav = ({onClose}) => {
  return (
    <div
      id="navContainer"
      className="w-screen h-[90vh] absolute top-0 left-0 text-white bg-black/90
      -translate-y-[90vh] "
    >
      <div className="absolute top-10 right-10 p-5 bg-black rounded-full">
        <IoCloseSharp size={20} onClick={onClose} />
      </div>
      <ul className="w-full h-full flex flex-col items-center justify-center">
        {menu.map((item, index) => (
          <li id="navLinks"  key={index} className="py-2">
          <NavLink item={item} />
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default MobileNav;
