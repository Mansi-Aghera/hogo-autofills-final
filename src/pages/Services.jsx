// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/serviceBanner.jpg";

// export default function ServicesHero() {
//   return (
//     <section
//       className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center text-center px-6"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl w-full">
//         <h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold"
//           style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
//         >
//           Our Services
//         </h1>

//         {/* Divider */}
//         <div className="w-full h-[1px] my-6 bg-white/20" />

//         {/* Breadcrumb */}
//         <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//           <Link
//             to="/"
//             className="hover:underline transition"
//             style={{ color: themes.textWhite }}
//           >
//             Home
//           </Link>

//           <span style={{ color: themes.textWhite }}>›</span>

//           <span
//             className="font-medium"
//             style={{ color: themes.primary }}
//           >
//             Our Services
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// // }

// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/serviceBanner.jpg";

// export default function ServicesHero() {
//   return (
//     <section
//       className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center text-center px-6"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl w-full">
//         <h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold"
//           style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
//         >
//           Our Services
//         </h1>

//         {/* Divider */}
//         <div className="w-full h-[1px] my-6 bg-white/20" />

//         {/* Breadcrumb */}
//         <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//           <Link
//             to="/"
//             className="transition font-bold"
//             style={{ color: themes.backgroundGray }}
//           >
//             Home
//           </Link>

//           <span style={{ color: themes.textWhite }}>›</span>

//           <span
//             className="font-semibold"
//             style={{ color: themes.textWhite }}
//           >
//             Our Services
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { themes } from "../config/themeConfig";
// import RollingButton from "../components/RollingButton";

// import s1 from "../assets/images/service1.jpg";
// import s2 from "../assets/images/service2.jpg";
// import s3 from "../assets/images/service3.jpg";
// import s4 from "../assets/images/service4.png";
// import s5 from "../assets/images/service5.jpg";
// import s6 from "../assets/images/service6.jpg";

// const services = [
//   {
//     id: "01",
//     title: "Exterior Hand Wash & Wax",
//     desc: "Gentle yet thorough hand wash using pH-balanced soaps, followed by premium wax.",
//     img: s1,
//   },
//   {
//     id: "02",
//     title: "Interior Deep Cleaning",
//     desc: "Deep vacuuming, steam cleaning, and leather treatment.",
//     img: s2,
//   },
//   {
//     id: "03",
//     title: "Paint Correction",
//     desc: "Removes swirl marks, oxidation, and light scratches.",
//     img: s3,
//   },
//   {
//     id: "04",
//     title: "Ceramic Coating",
//     desc: "Long-lasting protection with mirror-like gloss.",
//     img: s4,
//   },
//   {
//     id: "05",
//     title: "Engine Bay Detailing",
//     desc: "Degreasing and detailing for a like-new engine look.",
//     img: s5,
//   },
//   {
//     id: "06",
//     title: "Headlight Restoration",
//     desc: "Restore clarity and brightness of headlights.",
//     img: s6,
//   },
// ];

// export default function ServicesGrid() {
//   return (
//     <section
//       className="py-24 px-6"
//       style={{ backgroundColor: themes.backgroundBlack }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((item, i) => (
//           <div
//             key={i}
//             className="relative group rounded-xl overflow-hidden cursor-pointer"
//           >
//             {/* Image */}
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
//             />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/50" />

//             {/* Bottom title */}
//             <div className="absolute bottom-6 left-6 right-6 z-10">
//               <h3
//                 className="text-xl font-semibold"
//                 style={{ color: themes.textWhite }}
//               >
//                 {item.title}
//               </h3>
//             </div>

//             {/* Hover content */}
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/60 z-20">
//               <p
//                 className="mb-6 text-sm leading-relaxed"
//                 style={{ color: themes.textWhite }}
//               >
//                 {item.desc}
//               </p>

//               <RollingButton text="Read More" />
//             </div>

//             {/* Number */}
//             <span className="absolute top-4 left-4 text-white/80 text-lg font-semibold z-20">
//               {item.id}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/serviceBanner.jpg";
// import RollingButton from "../components/RollingButton";
// import CtaView from "../components/CtaView";

// import s1 from "../assets/images/service1.jpg";
// import s2 from "../assets/images/service2.jpg";
// import s3 from "../assets/images/service3.jpg";
// import s4 from "../assets/images/service4.png";
// import s5 from "../assets/images/service5.jpg";
// import s6 from "../assets/images/service6.png";

// const services = [
//   {
//     id: "01",
//     title: "Exterior Hand Wash & Wax",
//     desc: "Gentle yet thorough hand wash using pH-balanced soaps, followed by premium wax.",
//     img: s1,
//   },
//   {
//     id: "02",
//     title: "Interior Deep Cleaning",
//     desc: "Deep vacuuming, steam cleaning, and leather treatment.",
//     img: s2,
//   },
//   {
//     id: "03",
//     title: "Paint Correction",
//     desc: "Removes swirl marks, oxidation, and light scratches.",
//     img: s3,
//   },
//   {
//     id: "04",
//     title: "Ceramic Coating",
//     desc: "Long-lasting protection with mirror-like gloss.",
//     img: s4,
//   },
//   {
//     id: "05",
//     title: "Engine Bay Detailing",
//     desc: "Degreasing and detailing for a like-new engine look.",
//     img: s5,
//   },
//   {
//     id: "06",
//     title: "Headlight Restoration",
//     desc: "Restore clarity and brightness of headlights.",
//     img: s6,
//   },
// ];

// export default function Services() {
//   return (
//     <>
//       {/* HERO */}
//       <section
//         className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center text-center px-6"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Dark Overlay */}
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
//         />

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl w-full">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
//           >
//             Our Services
//           </h1>

//           {/* Divider */}
//           <div className="w-full h-[1px] my-6 bg-white/20" />

//           {/* Breadcrumb */}
//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link
//               to="/"
//               className="transition font-bold"
//               style={{ color: themes.backgroundGray }}
//             >
//               Home
//             </Link>

//             <span style={{ color: themes.textWhite }}>›</span>

//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Our Services
//             </span>
//           </div>
//         </div>
//       </section>
//       {/* GRID */}
//       <section
//         className="py-24 px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((item, i) => (
//             <div
//               key={i}
//               className="relative group rounded-xl overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-black/50" />

//               <div className="absolute bottom-6 left-6 right-6 z-10">
//                 <h3
//                   className="text-xl font-semibold text-center"
//                   style={{ color: themes.textWhite }}
//                 >
//                   {item.title}
//                 </h3>
//               </div>

//               <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/60 z-20">
//                 <p
//                   className="mb-6 text-sm leading-relaxed"
//                   style={{ color: themes.textWhite }}
//                 >
//                   {item.desc}
//                 </p>

//                 <RollingButton text="Read More" />
//               </div>

//               <span className="absolute top-4 left-4 text-white/80 text-lg font-semibold z-20">
//                 {item.id}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>
//       <CtaView />
//     </>
//   );
// }



 
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/serviceBanner.jpg";
import RollingButton from "../components/RollingButton";
import CtaView from "../components/CtaView";
 
import s1 from "../assets/images/service1.jpg";
import s2 from "../assets/images/service2.jpg";
import s3 from "../assets/images/service3.jpg";
import s4 from "../assets/images/service4.png";
import s5 from "../assets/images/service5.jpg";
import s6 from "../assets/images/service6.png";
 
const services = [
  { id: "01", title: "Exterior Hand Wash & Wax", desc: "Gentle yet thorough hand wash using pH-balanced soaps, followed by premium wax.", img: s1 },
  { id: "02", title: "Interior Deep Cleaning", desc: "Deep vacuuming, steam cleaning, and leather treatment.", img: s2 },
  { id: "03", title: "Paint Correction", desc: "Removes swirl marks, oxidation, and light scratches.", img: s3 },
  { id: "04", title: "Ceramic Coating", desc: "Long-lasting protection with mirror-like gloss.", img: s4 },
  { id: "05", title: "Engine Bay Detailing", desc: "Degreasing and detailing for a like-new engine look.", img: s5 },
  { id: "06", title: "Headlight Restoration", desc: "Restore clarity and brightness of headlights.", img: s6 },
];
 
export default function ServicesPage() {
  /* ================= SCROLL ANIMATION ================= */
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroVisible(true);
            if (entry.target === gridRef.current) setGridVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
 
    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
 
        {/* Content */}
        <div
          ref={heroRef}
          className={`
            relative z-10 max-w-4xl w-full
            transition-all duration-700 ease-out
            ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
          >
            Our Services
          </h1>
 
          <div className="w-full h-[1px] my-6 bg-white/20" />
 
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
              Home
            </Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <span className="font-bold" style={{ color: themes.textWhite }}>
              Our Services
            </span>
          </div>
        </div>
      </section>
 
      {/* ================= GRID ================= */}
      <section className="py-24 px-6" style={{ backgroundColor: themes.backgroundBlack }}>
        <div
          ref={gridRef}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, i) => (
            <div
              key={i}
              className={`
                relative group rounded-xl overflow-hidden cursor-pointer
                transition-all duration-700 ease-out
                ${gridVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
              `}
              style={{ transitionDelay: `${i * 450}ms` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
 
              <div className="absolute inset-0 bg-black/50" />
 
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-xl font-semibold text-center" style={{ color: themes.textWhite }}>
                  {item.title}
                </h3>
              </div>
 
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/60 z-20">
                <p className="mb-6 text-sm leading-relaxed" style={{ color: themes.textWhite }}>
                  {item.desc}
                </p>
                {/* <RollingButton text="Read More" /> */}
              </div>
 
              <span className="absolute top-4 left-4 text-white/80 text-lg font-semibold z-20">
                {item.id}
              </span>
            </div>
          ))}
        </div>
      </section>
 
      <CtaView />
    </>
  );
}
 