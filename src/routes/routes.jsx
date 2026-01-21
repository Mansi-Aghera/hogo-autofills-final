import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../pages/Services";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // Layout
    children: [
      {
        index: true,
        element: <Home />,   // Home only
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
 