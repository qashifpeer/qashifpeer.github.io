import React from "react";

const Button = ({text}) => {
  return (
    <button className="px-6 py-2 max-w-[50%] relative overflow-hidden group border border-primary ">
      <span className="absolute w-0 h-full left-0 top-0 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:delay-100 "></span>
      <span className="relative z-10 font-light text-primary uppercase group-hover:text-white group-hover:font-medium">
        {text}
      </span>
    </button>
  );
};

export default Button;
