import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-t from-fuchsia to-purple ">
      <div className="">
        <div>
          <div className="flex gap-2">
            <p className="md:text-6xl text-3xl font-kenia font-extrabold text-secondary">
              Let's <br /> create
            </p>
            <h2 className="md:text-9xl text-6xl font-kenia font-extrabold text-secondary">
              Something
            </h2>
          </div>
          <p className=" text-[9rem] md:text-[13rem] font-kenia leading-none text-secondary">
            Amazing
          </p>
        </div>

        <div className="mt-16 flex justify-center items-center">
          <BiLogoGmail size={16} className="text-secondary" />
          <span className="text-base font-light px-2 text-secondary">
            mail.qashifpeer@gmail.com
          </span>
        </div>

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
        <hr className="text-gray mt-2 text-center" />
        <p className="text-sm text-gray font-light mt-2 text-center">
          © Copyright 2023 - Developed by Qashif Peer. All right reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
