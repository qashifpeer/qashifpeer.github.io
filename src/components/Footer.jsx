import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-fuchsia to-purple ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold w-full text-center my-6 text-secondary mt-20">
          Connect with me
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            {/* ============email========== */}
            <div className="flex justify-start items-center mt-14 gap-1">
              <BiLogoGmail size={16} className="text-secondary" />
              <span className="text-base font-normal md:px-4 text-secondary">
                mail.qashifpeer@gmail.com
              </span>
            </div>
            {/* ============social icons */}
            <div className="flex gap-3 mt-10">
              <a href="">
                <FiGithub
                  size={25}
                  className="text-secondary hover:translate-y-1 duration-500"
                />
              </a>
              <a href="">
                <RiTwitterXFill
                  size={25}
                  className="text-secondary hover:translate-y-1 duration-500"
                />
              </a>
              <a href="">
                <FaLinkedin
                  size={25}
                  className="text-secondary hover:translate-y-1 duration-500"
                />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            {/* ============ footer nav items */}
            <div className="flex flex-col gap-4 items-start py-12">
              <a
                className="text-secondary font-normal hover:translate-y-1 duration-300"
                href=""
              >
                My Work
              </a>
              <a
                className="text-secondary font-normal hover:translate-y-1 duration-300"
                href=""
              >
                My Blogs
              </a>
              <a
                className="text-secondary font-normal hover:translate-y-1 duration-300"
                href=""
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
