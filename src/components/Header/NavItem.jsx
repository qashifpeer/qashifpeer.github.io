import { links } from "../../constants/navlinks";
import { Link, NavLink } from "react-router-dom";

const NavItem = () => {
  return (
    <>
        {links.map((link) => (
              <li
                className="text-xl font-semibold hover:text-primary duration-500"
                key={link.navText}
              >
                <NavLink to={link.to}>{link.navText}</NavLink>
              </li>
            ))}
    </>
  )
}

export default NavItem