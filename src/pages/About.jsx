import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <div className="min-h-screen w-full bg-deep-blue mt-[70px]">
        <div className="w-3/4 p-10 mx-auto">

      
        <p className="text-secondary text-sm">
          Welcome to my blog! I'm a passionate web developer with a knack for
          crafting dynamic and user-friendly experiences. With a strong
          foundation in front-end development, I specialize in bringing designs
          to life through the seamless integration of technologies like ReactJs,
          HTML5, CSS3, Tailwind CSS, and Redux. Having navigated through the
          intricate stages of the development cycle, I've honed my skills in
          project management and customer relations. My journey includes
          collaborating with designers to create clean interfaces, optimizing
          workflows, and tackling large, complex design projects for corporate
          clients. In my most recent role at KashoSoft Labs, Baramulla, I've not
          only delved into front-end development but also contributed to
          challenging back-end server code. My experience extends to conducting
          quality assurance tests to enhance usability, showcasing my commitment
          to delivering polished and error-free projects. Prior to this, as a
          Technical Associate at Compsoft Solutions, Model Town, Sopore, I built
          a solid foundation in web development, while my tenure as a Business
          Development Associate at Comsoft Solutions allowed me to understand
          the broader aspects of the industry. Armed with a Bachelor's in
          Computer Applications from the University of Kashmir, I'm excited to
          share my insights, experiences, and the latest trends in web
          development through this blog. Join me on this journey as we explore
          the dynamic world of coding, design, and everything in between!
        </p>
        <div className="flex gap-3 mt-6 justify-center items-center">
          <a href="https://github.com/qashifpeer" target="#">
            <FiGithub
              size={25}
              className="text-secondary hover:translate-y-1 duration-500"
            />
          </a>
          <a href="https://twitter.com/qashifpeer" target="#">
            <RiTwitterXFill
              size={25}
              className="text-secondary hover:translate-y-1 duration-500"
            />
          </a>
          <a href="https://linkedin.com/qashifpeer" target="#">
            <FaLinkedin
              size={25}
              className="text-secondary hover:translate-y-1 duration-500"
            />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
