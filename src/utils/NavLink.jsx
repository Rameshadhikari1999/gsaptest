import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ item }) => {
  return (
    <Link
      activeClass="text-blue-500"
      className="font-gupter uppercase text-2xl tracking-widest cursor-pointer hover:text-blue-500 hover:scale-90 transition-all ease-linear duration-300"
      to={item.toLowerCase()}
      spy={true}
      smooth={true}
      duration={500}
    >
      {item}
    </Link>
  );
};

export default NavLink;
