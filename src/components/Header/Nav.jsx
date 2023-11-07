
// import { HiXMark } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../constants/navlinks";
import { useState } from "react";
import HamButton from "./HamButton";
import SideMenu from "../SideMenu";
import NavItem from "./NavItem";



const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full z-40  min-h-[70px] shadow-lg">
      <div className=" bg-secondary flex justify-between p-4  relative ">
        {/* ============logo================ */}
        <div className="text-3xl font-bold text-primary bg-secondary">
          <Link to="/">
           <h3 className="">Q<span className="bg-primary text-secondary font-serif p-1">P</span></h3> 
          </Link>
        </div>
        {/* ============= Nav Items */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            <NavItem />
          </ul>
        </div>
       
       
        {/* ================== Hamburger */}
       <div>
       <HamButton toggle={toggle} setToggle={setToggle} />
       </div>
       
        {/*========== mobile menu */}
        <div className={` bg-secondary w-full left-0 top-20  ${toggle ? "flex absolute " : "hidden"}` }>
        <SideMenu  toggle={toggle} />
        </div>
       
        
      </div>
    </nav>
  );
};

export default Nav;
