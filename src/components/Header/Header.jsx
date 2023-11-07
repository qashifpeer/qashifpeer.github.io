import React, { useState } from "react";
import Sidebar from "../SideMenu";
import Nav from "./Nav";

const Header = () => {
  const [hamClicked ,setHamClicked] = useState(false);
  console.log("🚀 ~ file: Header.jsx:5 ~ Header ~ hamClicked:", hamClicked)
  function ham(){
    setHamClicked(!hamClicked)
   
  }
  return (
    <>
    <Nav />
    
    </>
  );
};

export default Header;
