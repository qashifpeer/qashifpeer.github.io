
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
      <Route path="" element= {<Home />} />
      <Route path="blogs" element= {<Blogs />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<Contact />} />
      {/* <Route path="work" element= {<Work />} /> */}

    </Route>
  )
)





ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />
 
);
