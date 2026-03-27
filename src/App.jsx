// import NavbarView from "./components/NavbarView";
// import FooterView from "./components/FooterView";
// import { Outlet } from "react-router-dom";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[var(--bg-secondary)]">
//       <NavbarView />

//       {/* HERO ONLY ON HOME PAGE */}

//       <main className="">
//         <Outlet />
//       </main>

//       <FooterView />
//     </div>
//   );
// }


import NavbarView from "./components/NavbarView";
import FooterView from "./components/FooterView";
import { Outlet } from "react-router-dom";
 import ScrollToTop from "./components/ScrollToTop";
 import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function App() {

  function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -100; // 👈 navbar height adjust kar (80 / 90 / 100)
const y =
  el.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}
  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] hide-scrollbar">
     <ScrollToTop /> 
     <ScrollToHash /> 
      <NavbarView />
 
      {/* HERO ONLY ON HOME PAGE */}
 
      <main className="">
        <Outlet />
      </main>
 
      <FooterView />
    </div>
  );
}