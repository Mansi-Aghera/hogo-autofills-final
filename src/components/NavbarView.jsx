// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import { themes } from "../config/themeConfig";

// import RollingButton from "../components/RollingButton"; // adjust path if needed
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";
// export default function NavbarView() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
// <nav
//   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 sm:py-6 ${
//     scrolled ? "shadow-md" : ""
//   }`}
//   style={{
//     backgroundColor: scrolled
//       ? themes.backgroundBlack
//       : "transparent",
//   }}
// >

//         <div className="max-w-7xl mx-auto px-4 sm:px-6
//  flex items-center justify-between">
//           <img src={logo} alt="Hogo Autofills" className="h-10 sm:h-12" />

//           <div className="hidden md:flex items-center gap-12">
//             {[
//               { label: "Home", path: "/" },
//               { label: "Benefits", path: "#benefits" },
//               { label: "Features", path: "#features" },
//               { label: "Blog", path: "/blog" },
//               { label: "Contact", path: "/contact" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.path}
//                 className={`relative font-medium transition-all ${
//                   scrolled ? "text-white" : "text-white"
//                 } hover:text-[var(--primary)]`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-5">
//             <RollingButton text="Get Quote" />

//             <div
//               className="flex flex-col gap-1 cursor-pointer"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//               onClick={() => setOpen(true)}
//             >
//               <span
//                 className={`block h-[2px] w-8 transition-all duration-300 origin-right ${
//                   scrolled ? "bg-white" : "bg-white"
//                 } ${hovered ? "scale-x-70" : "scale-x-100"}`}
//               ></span>

//               <span
//                 className={`block h-[2px] w-8 transition-all duration-300 origin-left ${
//                   scrolled ? "bg-white" : "bg-white"
//                 } ${hovered ? "scale-x-70" : "scale-x-100"}`}
//               ></span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* BACKDROP */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setOpen(false)}
//       ></div>

//       {/* ================ SIDEBAR ================= */}
// <div
//   className={`fixed top-0 right-0 h-full w-[75vw] sm:w-[380px] md:w-[400px]
//     z-50 shadow-2xl transition-transform duration-400 ${
//       open ? "translate-x-0" : "translate-x-full"
//     }`}
//   style={{ backgroundColor: themes.backgroundBlack }}
// >

//         <div className="h-full flex flex-col justify-between p-6 sm:p-8
//  overflow-y-auto">
//           {/* TOP: LOGO + CLOSE */}
//           <div>
//             <div className="flex items-center justify-between mb-6">
//               <img src={logo} alt="Logo" className="h-10" />
//               <button
//                 onClick={() => setOpen(false)}
//                 className="text-gray-400 hover:text-[var(--primary)] transition-all"
//               >
//                 ✕
//               </button>
//             </div>

//             <hr className="border-gray-700 mb-6" />

//             {/* ===== OUR SERVICE SECTION ===== */}
//             <h3 className="text-white font-semibold mb-3">Our Service</h3>
//             <ul className="space-y-2 text-gray-300 mb-6">
//               <li>Exterior Hand Wash & Wax</li>
//               <li>Paint Correction</li>
//               <li>Interior Deep Cleaning</li>
//               <li>Ceramic Coating Protection</li>
//               <li>Engine Bay Detailing</li>
//               <li>Headlight Restoration</li>
//             </ul>

//             <hr className="border-gray-700 mb-6" />

//             {/* ===== CONTACT US SECTION ===== */}
//             <h3 className="text-white font-semibold mb-3">Contact Us</h3>

//             <div className="space-y-3 text-gray-300 mb-6">
//               <div className="flex items-start gap-3">
//                 <span className="text-[var(--primary)]">🕒</span>
//                 <p>Monday - Friday 08.00 - 18.00</p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="text-[var(--primary)]">📍</span>
//                 <p>100 S Main St, New York,</p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="text-[var(--primary)]">✉️</span>
//                 <p>contact@wastewise.com</p>
//               </div>
//             </div>

//             <hr className="border-gray-700 mb-6" />

//             {/* ===== ABOUT US SECTION ===== */}
//             <h3 className="text-white font-semibold mb-3">About Us</h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
//             </p>
//           </div>

//           {/* ===== SOCIAL ICONS ===== */}
//      {/* ===== SOCIAL ICONS ===== */}
// <div className="flex items-center gap-4 mt-8">
//   {[
//     { icon: <FaFacebookF />, link: "https://facebook.com" },
//     { icon: <FaInstagram />, link: "https://instagram.com" },
//     { icon: <FaTwitter />, link: "https://twitter.com" },
//     { icon: <FaYoutube />, link: "https://youtube.com" },
//     { icon: <FaWhatsapp />, link: "https://wa.me/1234567890" },
//   ].map((item, i) => (
//     <a
//       key={i}
//       href={item.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 transition-all duration-300 cursor-pointer hover:bg-[var(--primary)] hover:text-black text-white"
//     >
//       <span className="text-lg">{item.icon}</span>
//     </a>
//   ))}
// </div>

//         </div>
//       </div>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import { themes } from "../config/themeConfig";

// import RollingButton from "../components/RollingButton"; // adjust path if needed
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";
// export default function NavbarView() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 sm:py-6 ${
//           scrolled ? "shadow-md" : ""
//         }`}
//         style={{
//           backgroundColor: scrolled ? themes.backgroundBlack : "transparent",
//         }}
//       >
//         <div
//           className="max-w-7xl mx-auto px-4 sm:px-6
//  flex items-center justify-between"
//         >
//           <Link to="/">
//   <img
//     src={logo}
//     alt="Hogo Autofills"
//     className="h-10 sm:h-12 cursor-pointer"
//   />
// </Link>

//           <div className="hidden md:flex items-center gap-12">
//             {[
//               { label: "Home", path: "/" },
//               { label: "Services", path: "/services" },
//               { label: "About us", path: "/about" },
//               { label: "Contact us", path: "/contact" },
//               { label: "Gallery", path: "/gallery" },
//               { label: "blog", path: "/blog" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.path}
//                 className={`relative font-medium transition-all ${
//                   scrolled ? "text-white" : "text-white"
//                 } hover:text-[var(--primary)]`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-5">
//             <RollingButton text="Make Appointment" />

//             <div
//               className="flex flex-col gap-1 cursor-pointer"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//               onClick={() => setOpen(true)}
//             >
//               <span
//                 className={`block h-[2px] w-8 transition-all duration-300 origin-right ${
//                   scrolled ? "bg-white" : "bg-white"
//                 } ${hovered ? "scale-x-70" : "scale-x-100"}`}
//               ></span>

//               <span
//                 className={`block h-[2px] w-8 transition-all duration-300 origin-left ${
//                   scrolled ? "bg-white" : "bg-white"
//                 } ${hovered ? "scale-x-70" : "scale-x-100"}`}
//               ></span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* BACKDROP */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setOpen(false)}
//       ></div>

//       {/* ================ SIDEBAR ================= */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[75vw] sm:w-[380px] md:w-[400px]
//     z-50 shadow-2xl transition-transform duration-400 ${
//       open ? "translate-x-0" : "translate-x-full"
//     }`}
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <div
//           className="h-full flex flex-col justify-between p-6 sm:p-8
//  overflow-y-auto"
//         >
//           {/* TOP: LOGO + CLOSE */}
//           <div>
//             <div className="flex items-center justify-between mb-6">
//               <img src={logo} alt="Logo" className="h-10" />
//               <button
//                 onClick={() => setOpen(false)}
//                 className="text-gray-400 hover:text-[var(--primary)] transition-all"
//               >
//                 ✕
//               </button>
//             </div>

//             <hr className="border-gray-700 mb-6" />

//             {/* ===== OUR SERVICE SECTION ===== */}
//             <h3 className="text-white font-semibold mb-3">Our Service</h3>
//             <ul className="space-y-2 text-gray-300 mb-6">
//               <li>Exterior Hand Wash & Wax</li>
//               <li>Paint Correction</li>
//               <li>Interior Deep Cleaning</li>
//               <li>Ceramic Coating Protection</li>
//               <li>Engine Bay Detailing</li>
//               <li>Headlight Restoration</li>
//             </ul>

//             <hr className="border-gray-700 mb-6" />

//             {/* ===== CONTACT US SECTION ===== */}
//             <h3 className="text-white font-semibold mb-3">Contact Us</h3>

//             <div className="space-y-3 text-gray-300 mb-6">
//               <div className="flex items-start gap-3">
//                 <span className="text-[var(--primary)]">🕒</span>
//                 <p>Monday - Friday 08.00 - 18.00</p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="text-[var(--primary)]">📍</span>
//                 <p>100 S Main St, New York,</p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="text-[var(--primary)]">✉️</span>
//                 <p>contact@wastewise.com</p>
//               </div>
//             </div>

//             <hr className="border-gray-700 mb-6" />

//             {/* ===== ABOUT US SECTION ===== */}
//             <h3 className="text-white font-semibold mb-3">About Us</h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some formThere are
//               many variations of passages of Lorem Ipsum available, but the
//               majority have suffered alteration in some formThere are many
//               variations of passages of Lorem Ipsum available, but the majority
//               have suffered alteration in some formThere are many variations of
//               passages of Lorem Ipsum available, but the majority have suffered
//               alteration in some formThere are many variations of passages of
//               Lorem Ipsum available, but the majority have suffered alteration
//               in some formThere are many variations of passages of Lorem Ipsum
//               available, but the majority have suffered alteration in some
//               formThere are many variations of passages of Lorem Ipsum
//               available, but the majority have suffered alteration in some form
//             </p>
//           </div>

//           {/* ===== SOCIAL ICONS ===== */}
//           {/* ===== SOCIAL ICONS ===== */}
//           <div className="flex items-center gap-4 mt-8">
//             {[
//               { icon: <FaFacebookF />, link: "https://facebook.com" },
//               { icon: <FaInstagram />, link: "https://instagram.com" },
//               { icon: <FaTwitter />, link: "https://twitter.com" },
//               { icon: <FaYoutube />, link: "https://youtube.com" },
//               { icon: <FaWhatsapp />, link: "https://wa.me/1234567890" },
//             ].map((item, i) => (
//               <a
//                 key={i}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 transition-all duration-300 cursor-pointer hover:bg-[var(--primary)] hover:text-black text-white"
//               >
//                 <span className="text-lg">{item.icon}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { themes } from "../config/themeConfig";
 
import RollingButton from "../components/RollingButton"; // adjust path if needed
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
export default function NavbarView() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <>
      {/* ================= NAVBAR ================= */}
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 sm:py-6 ${
    scrolled ? "shadow-md" : ""
  }`}
  style={{
    backgroundColor: scrolled
      ? themes.sidebar
      : "transparent",
  }}
>
 
 
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6
 flex items-center justify-between">
<Link to="/">
  <img
    src={logo}
    alt="Hogo Autofills"
    className="h-10 sm:h-12 cursor-pointer"
  />
</Link>
 
 
          <div className="hidden md:flex items-center gap-12">
            {[
            { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About us", path: "/about" },
              { label: "Contact us", path: "/contact" },
              { label: "Gallery", path: "/gallery" },
              { label: "blog", path: "/blog" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`relative font-medium transition-all ${
                  scrolled ? "text-white" : "text-white"
                } hover:text-[var(--primary)]`}
              >
                {item.label}
              </Link>
            ))}
          </div>
 
          <div className="flex items-center gap-5">
            <RollingButton text="Make Appointment" />
 
            <div
              className="flex flex-col gap-1 cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setOpen(true)}
            >
              <span
                className={`block h-[2px] w-8 transition-all duration-300 origin-right ${
                  scrolled ? "bg-white" : "bg-white"
                } ${hovered ? "scale-x-70" : "scale-x-100"}`}
              ></span>
 
              <span
                className={`block h-[2px] w-8 transition-all duration-300 origin-left ${
                  scrolled ? "bg-white" : "bg-white"
                } ${hovered ? "scale-x-70" : "scale-x-100"}`}
              ></span>
            </div>
          </div>
        </div>
      </nav>
 
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
 
      {/* ================ SIDEBAR ================= */}
<div
  className={`fixed top-0 right-0 h-full w-[75vw] sm:w-[380px] md:w-[400px]
    z-50 shadow-2xl transition-transform duration-400 ${
      open ? "translate-x-0" : "translate-x-full"
    }`}
  style={{ backgroundColor: themes.backgroundBlack }}
>
 
        <div className="h-full flex flex-col justify-between p-6 sm:p-8
 overflow-y-auto">
          {/* TOP: LOGO + CLOSE */}
          <div>
            <div className="flex items-center justify-between mb-6">
<Link to="/">
  <img
    src={logo}
    alt="Hogo Autofills"
    className="h-10 sm:h-12 cursor-pointer"
  />
</Link>              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-[var(--primary)] transition-all"
              >
                ✕
              </button>
            </div>
 
            <hr className="border-gray-700 mb-6" />
 
            {/* ===== OUR SERVICE SECTION ===== */}
            <h3 className="text-white font-semibold mb-3">Our Service</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>Exterior Hand Wash & Wax</li>
              <li>Paint Correction</li>
              <li>Interior Deep Cleaning</li>
              <li>Ceramic Coating Protection</li>
              <li>Engine Bay Detailing</li>
              <li>Headlight Restoration</li>
            </ul>
 
            <hr className="border-gray-700 mb-6" />
 
            {/* ===== CONTACT US SECTION ===== */}
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
 
            <div className="space-y-3 text-gray-300 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">🕒</span>
                <p>Monday - Friday 08.00 - 18.00</p>
              </div>
 
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">📍</span>
                <p>100 S Main St, New York,</p>
              </div>
 
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">✉️</span>
                <p>contact@wastewise.com</p>
              </div>
            </div>
 
            <hr className="border-gray-700 mb-6" />
 
            {/* ===== ABOUT US SECTION ===== */}
            <h3 className="text-white font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
          </div>
 
          {/* ===== SOCIAL ICONS ===== */}
     {/* ===== SOCIAL ICONS ===== */}
<div className="flex items-center gap-4 mt-8">
  {[
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/1234567890" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 transition-all duration-300 cursor-pointer hover:bg-[var(--primary)] hover:text-black text-white"
    >
      <span className="text-lg">{item.icon}</span>
    </a>
  ))}
</div>
 
        </div>
      </div>
    </>
  );
}