import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ item, onClick }) => {
  return (
    <Link
      activeClass="text-blue-500"
      className="font-gupter uppercase text-lg tracking-wider font-medium cursor-pointer hover:text-blue-500 hover:scale-90 transition-all ease-linear duration-300"
      to={item.replace(" ",'').toLowerCase()}
      spy={true}
      smooth={true}
      duration={500}
      onClick={onClick}
    >
      {item}
    </Link>
  );
};

export default NavLink;
