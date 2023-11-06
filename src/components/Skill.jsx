import React from "react";
import Button from "./Button";

const Skill = () => {
  return (
    <div className="bg-offwhite min-h-screen w-full flex justify-center items-center">
      <div className="w-[80%] bg-white mx-auto md:flex gap-1 my-4">
        <div className="left  w-full flex flex-col justify-between gap-6 md:border-r border-b md:border-b-0 border-gray p-8 ">
          <h1 className=" text-primary text-4xl font-extrabold  max-w-[65%]">
            I build & design stuff
          </h1>
          <p className="text-base text-gray font-medium max-w-[65%]">
            Open source projects, web apps and experimentals.
          </p>
          <Button text={'see my work'}/>
        </div>
        <div className="right w-full flex flex-col justify-between gap-6 p-8 ">
          <h1 className=" text-primary text-4xl font-extrabold  max-w-[65%]">
            I write, sometimes
          </h1>
          <p className="text-base text-gray font-medium max-w-[65%]">
            About design, frontend dev, learning and life.
          </p>
          <Button text={'read my articles'} />
          {/* <button className="px-6 py-2 max-w-[50%] relative overflow-hidden group border border-primary ">
            <span className="absolute w-0 h-full left-0 top-0 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:delay-100 "></span>
            <span className="relative z-10 font-light text-primary uppercase group-hover:text-white group-hover:font-medium">
              Read my articles
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
