import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-fuchsia to-purple ">
      <h1 className="text-3xl font-bold w-full text-center my-6 text-secondary">Connect with me</h1>
      <div className="flex justify-center items-center ">
        <div className="w-[70%] flex  ">
          <div className="w-1/2">
            <div className="p-8 ">
              <div className="flex justify-start items-center mt-14">
                <BiLogoGmail size={18} className="text-secondary" />
                <span className="text-lg font-normal md:px-4 text-secondary">
                  mail.qashifpeer@gmail.com
                </span>
              </div>
              <div className="flex gap-3 mt-10">
                <a href="">
                  <FiGithub size={25} className="text-secondary hover:translate-y-1 duration-500"/>
                </a>
                <a href="">
                  <RiTwitterXFill size={25} className="text-secondary hover:translate-y-1 duration-500"/>
                </a>
                <a href="">
                  <FaLinkedin size={25} className="text-secondary hover:translate-y-1 duration-500"/>
                </a>
              </div>
            </div>
          </div>
          <div className="right w-1/2 ">
            <div className="p-8 ">
            <div className="flex flex-col gap-4 items-start py-12">
              <a className="text-secondary font-normal hover:translate-y-1 duration-300" href="">My Work</a>
              <a className="text-secondary font-normal hover:translate-y-1 duration-300" href="">My Blogs</a>
              <a className="text-secondary font-normal hover:translate-y-1 duration-300" href="">My Resume</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
