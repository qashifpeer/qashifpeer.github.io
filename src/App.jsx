import {  Outlet } from "react-router-dom";
// import Home from "./pages/Home";
// import Work from "./pages/Work";
// import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";
import Header from "./components/Header/Header";
import { Footer } from "./components";

const App = () => {
  return (
    <>
    
      <Header />
      <Outlet />
      <Blogs />

      <Footer />
      
    </>
  );
};

export default App;
