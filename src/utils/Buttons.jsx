import React from "react";

const Buttons = ({ text }) => {
  return (
    <button
      onClick={() => alert("hello")}
      className="py-3 px-16 text-white bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-700 capitalize rounded outline-none border-none hover:scale-105 transition-all ease-linear duration-300 z-10"
    >
      {text}
    </button>
  );
};

export default Buttons;
