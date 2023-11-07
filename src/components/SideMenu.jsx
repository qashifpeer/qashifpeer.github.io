import {  NavLink } from "react-router-dom";

import { links } from "../constants/navlinks";
import NavItem from "./Header/NavItem";

const SideMenu = ({toggle}) => {
  return (
    <div>
      <div className="">
          <ul className="flex flex-col gap-6 bg-secondary m-8">
           <NavItem />
          </ul>
        </div>
    </div>
  )
}

export default SideMenu