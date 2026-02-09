// import { themes } from "../config/themeConfig";
// import DecoratedTitle from "./DecoratedTitle";
// import { FaInstagram } from "react-icons/fa";
 
// import insta1 from "../assets/images/insta1.jpg";
// import insta2 from "../assets/images/insta2.jpg";
// import insta3 from "../assets/images/insta3.jpg";
// import insta4 from "../assets/images/insta4.jpg";
// import insta5 from "../assets/images/insta5.jpg";
// import insta6 from "../assets/images/insta6.jpg";
// import insta7 from "../assets/images/insta7.jpg";
// import insta8 from "../assets/images/insta8.jpg";
 
// const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8];
 
// export default function InstagramView() {
//   return (
//     <section
//       className="py-24 overflow-hidden"
//       style={{ backgroundColor: themes.backgroundGray }}
//     >
//       {/* Title */}
//       <div className="text-center mb-14 px-6">
//         <DecoratedTitle text="OUR INSTAGRAM"color={themes.textWhite} />
 
//         <h2
//           className="text-3xl md:text-5xl font-bold mt-6"
//           style={{ color: themes.textWhite }}
//         >
//           @hogo_Autofilms
//         </h2>
//       </div>
 
//       {/* Images Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className="relative group overflow-hidden cursor-pointer"
//           >
//             <img
//               src={img}
//               alt="Instagram"
//               className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
//             />
 
//             {/* Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
//               <FaInstagram size={28} color="white" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



 
import { useRef, useState, useEffect } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
import { FaInstagram } from "react-icons/fa";
 
import insta1 from "../assets/images/insta1.jpg";
import insta2 from "../assets/images/insta2.jpg";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.jpg";
import insta5 from "../assets/images/insta5.jpg";
import insta6 from "../assets/images/insta6.jpg";
import insta7 from "../assets/images/insta7.jpg";
import insta8 from "../assets/images/insta8.jpg";
 
const images = [
  insta1, insta2, insta3, insta4,
  insta5, insta6, insta7, insta8
];
 
export default function InstagramView() {
  /* ================= SCROLL ANIMATION ================= */
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
 
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden"
      style={{ backgroundColor: themes.backgroundGray }}
    >
      {/* ================= TITLE ================= */}
      <div className="text-center mb-14 px-6">
        {/* Decorated Title */}
        <div
          className={`
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <DecoratedTitle
            text="OUR INSTAGRAM"
            color={themes.backgroundBlack}
          />
        </div>
 
        {/* Heading */}
        <h2
          className={`
            text-3xl md:text-5xl font-bold mt-6
            transition-all duration-700 ease-out delay-150
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ color: themes.backgroundBlack }}
        >
          @hogo_Autofilms
        </h2>
      </div>
 
      {/* ================= IMAGES GRID ================= */}
      <div
        className={`
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8
          transition-all duration-900 ease-out delay-300
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        `}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden cursor-pointer"
          >
            <img
              src={img}
              alt="Instagram"
              className="
                w-full h-full object-cover aspect-square
                transition-transform duration-500
                group-hover:scale-110
              "
            />
 
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <FaInstagram size={28} color="white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 
 