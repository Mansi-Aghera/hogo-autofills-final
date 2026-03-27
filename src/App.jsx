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
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] hide-scrollbar">
     <ScrollToTop /> 
      <NavbarView />
 
      {/* HERO ONLY ON HOME PAGE */}
 
      <main className="">
        <Outlet />
      </main>
 
      <FooterView />
    </div>
  );
}