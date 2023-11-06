import { PiDotsNineBold, PiFunnelSimpleBold } from "react-icons/pi";
// import { HiXMark } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", navText: "Home" },
  { to: "about",    navText: "About",},
  { to: "/contact", navText: "Contact",},
];

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  console.log("🚀 ~ file: Nav.jsx:24 ~ Nav ~ toggle:", toggle);
  return (
    <nav className=" fixed top-0 left-0 w-full z-40  min-h-[70px] shadow-lg">
      <div className="p-4 bg-secondary flex gap-4 justify-between">
        {/* ============logo================ */}
        <div className="text-3xl font-bold text-primary">
          <Link to="/">
            kashif<span className="bg-primary text-secondary">peer</span>
          </Link>
        </div>
        {/* ============= Nav Items */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li
                className="text-xl font-semibold hover:text-primary duration-500"
                key={link.navText}
              >
                <NavLink to={link.to}>{link.navText}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* ================== Hamburger */}
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <PiFunnelSimpleBold className="text-primary text-3xl font-bold md:hidden cursor-pointer" />
          ) : (
            <PiDotsNineBold className="text-primary text-3xl font-bold md:hidden cursor-pointer" />
          )}
        </div>
        {/*========== mobile menu */}
        <div className={` bg-secondary w-1/2  ${toggle ? " right-0 top-16 absolute " : "hidden"}` }>
          <ul className="flex flex-col gap-6 p-6">
            {links.map((link) => (
              <li
                className="text-xl text-gray font-semibold hover:text-primary duration-500"
                key={link.navText}
              >
                <NavLink to={link.to}>{link.navText}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
