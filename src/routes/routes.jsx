// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Services from "../pages/Services";
// import About from "../pages/About";
// import Blog from "../pages/Blog";
// import Gallery from "../pages/Gallery";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";
 
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,   // Layout
//     children: [
//       {
//         index: true,
//         element: <Home />,   // Home only
//       },
//       {
//         path: "services",
//         element: <Services />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "blog",
//         element: <Blog />,
//       },
//       {
//         path: "gallery",
//         element: <Gallery />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
 

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../pages/Services";
import About from "../pages/About";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";  // 👈 ADD
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
 
      // 👇 THIS IS THE IMPORTANT LINE
      { path: "blog/:id", element: <SingleBlog /> },
 
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "terms", element: <TermsPage /> },
      { path: "privacy", element: <PrivacyPage /> },

    ],
  },
]);
 