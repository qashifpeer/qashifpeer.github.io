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
    {/* <div className="p-12 fixed  right-0">      
    
        <div className={"flex flex-col items-end  cursor-pointer " + (hamClicked ?'gap-0' : 'gap-2')}  onClick={()=>ham()}>
          <span className={"border  border-b-2 border-white md:border-primary "  + (hamClicked ? 'rotate-45 w-8 transition-all duration-500'  :'w-11') }></span>
          <span className={"border w-8 border-b-2 border-white md:border-primary "  + (hamClicked ? '-rotate-45 transition-all duration-500' : '')}></span>
        </div>
      
    </div>
    { hamClicked ? <Sidebar /> : ""} */}
    </>
  );
};

export default Header;
