import React from "react";

const Buttons = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-16 text-xl md:text-2xl lg:text-3xl font-gupter text-white bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-700 capitalize rounded outline-none border-none hover:scale-105 transition-all ease-linear duration-300"
    >
      {text}
    </button>
  );
};

export default Buttons;
