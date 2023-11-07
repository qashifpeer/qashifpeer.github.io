import React from "react";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import portrait from "../assets/portrait.jpeg";
import bgOne from "../assets/bg-1.png";

const Hero = () => {
  return (
    <div className="md:flex h-[calc(100vh - 70px)] mt-[70px] w-full">
      <div className="left  bg-gradient-to-t from-primary to-purple w-full  md:w-[70%]">
        <div className="flex flex-col w-full">
          <div className="md:ml-36 ml-12 mt-8 relative">
            <h1 className="text-secondary text-start font-extrabold text-3xl capitalize z-10 bg-[url('/bg-1.png')]">
              qashif peer
            </h1>
           
          </div>
          <div className="md:ml-36 ml-12 mt-[5rem] md:mt-[12rem] ">
            <h1 className="text-secondary text-6xl font-extrabold w-1/2">
              Frontend Developer
            </h1>
            <p className="mt-4 text-white text-base font-medium">
              I like to build awesome frontend products with great user
              experience
            </p>
          </div>
          <div className="flex  md:ml-36 ml-12 mt-10 md:mt-[8rem] gap-4">
            <p className="text-sm text-secondary font-light  w-[70%] ">
              Highly experienced in creating creating the user interface and
              user experience of websites and web applications.
            </p>
          </div>
        </div>

        <SocialLinks />
      </div>
      <div className="right  bg-gradient-to-t from-purple to-primary md:w-[30%] flex items-center">
        <div className="w-full flex justify-center items-center mx-auto py-10">
          <img
            src={portrait}
            alt="avatar"
            className="w-[200px] h-[200px] rounded-full border-2 border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
