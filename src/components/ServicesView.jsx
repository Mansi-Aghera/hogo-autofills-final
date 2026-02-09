// import DecoratedTitle from "./DecoratedTitle";
// import RollingButton from "./RollingButton";
// import { themes } from "../config/themeConfig";
 

// import s1 from "../assets/images/service1.jpg";
// import s2 from "../assets/images/service2.jpg";
// import s3 from "../assets/images/service3.jpg";
// import s4 from "../assets/images/service4.png";
// import s5 from "../assets/images/service5.jpg";
// import s6 from "../assets/images/service6.png";



// import b1 from "../assets/images/brand1.jpg";
// import b2 from "../assets/images/brand2.jpg";
// import b3 from "../assets/images/brand3.jpg";
// import b4 from "../assets/images/brand4.jpg";
// import b5 from "../assets/images/brand5.jpg";
// import b6 from "../assets/images/brand6.jpg";
// import b7 from "../assets/images/brand7.jpg";
// import b8 from "../assets/images/brand8.jpg";
// import SectionHeading from "./SectionHeading";
 
// const services = [
//   { id: "01", title: "Self healing property", img: s1 },
//   { id: "02", title: "High gloss film", img: s2 },
//   { id: "03", title: "Super hydrophobic property", img: s3 },
//   { id: "04", title: "Excellent stain resistance", img: s4 },
//   { id: "05", title: "Good optical clarity", img: s5 },
//   { id: "06", title: "Anti-yellowing property", img: s6 },
// ];
 
// const brands = [b1, b2, b3, b4, b5, b6, b7, b8];
 
// export default function ServicesView() {
//   return (
//     <>
//       <section
//   className=""
//   style={{background: themes.backgroundBlack,  color: themes.textWhite }}
// >
//         <div className="max-w-[1200px] mx-auto px-6">
//           <div className="text-center mb-14 pt-14">
//             <DecoratedTitle text="WELCOME TO Hogo Autofilms" style={{ color: themes.backgroundBlack }}/>
 
// <SectionHeading
//   secondLine=""
//   className="mt-4"
//   style={{ color: themes.textWhite }}
// >
// Premium Car Detailing</SectionHeading>




 
//             <p
//               className="max-w-2xl mx-auto mt-4"
//               style={{ color: themes.textWhite }}
//             >
//             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
//             </p>
//           </div>
 
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((item) => (
//               <ServiceCard key={item.id} item={item} />
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* Brand band niche */}
//       <BrandBand />
//     </>
//   );
// }
 
// function ServiceCard({ item }) {
//   return (
//     <div className="relative group h-[220px] sm:h-[260px] md:h-[300px] rounded-2xl overflow-hidden">
//       {/* Image */}
//       <img
//         src={item.img}
//         alt={item.title}
//         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[5px]"
//       />
 
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 transition-all duration-500"
//         style={{
//           backgroundColor: themes.backgroundBlack,
//           opacity: 0.6,
//         }}
//       />
 
//       {/* Number */}
//       <div
//         className="absolute top-5 left-5 text-xl font-bold"
//         style={{ color: themes.textWhite }}
//       >
//         {item.id}
//       </div>
 
//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//         <h3
//           className="text-xl md:text-2xl font-semibold mb-4"
//           style={{ color: themes.textWhite }}
//         >
//           {item.title}
//         </h3>
 
//         <div className="opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
//           <RollingButton text="View Details" />
//         </div>
//       </div>
//     </div>
//   );
// }
 
// function BrandBand() {
//   return (
//     <div
//       className="relative overflow-hidden py-16"
//       style={{ backgroundColor: themes.backgroundBlack }}
//     >
//       {/* Left fade */}
//       {/* <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" /> */}
 
//       {/* Right fade */}
//       {/* <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" /> */}
 
//       <div className="flex gap-10 sm:gap-16 md:gap-24 w-max animate-marquee">
//         {[...brands, ...brands].map((logo, i) => (
//           <img
//             key={i}
//             src={logo}
//             className="h-12 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition"
//             alt="brand"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


 
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import DecoratedTitle from "./DecoratedTitle";
import SectionHeading from "./SectionHeading";
import RollingButton from "./RollingButton";
import { themes } from "../config/themeConfig";
 
// Images
import s1 from "../assets/images/service1.jpg";
import s2 from "../assets/images/service2.jpg";
import s3 from "../assets/images/service3.jpg";
import s4 from "../assets/images/service4.png";
import s5 from "../assets/images/service5.jpg";
import s6 from "../assets/images/service6.png";
 
import b1 from "../assets/images/brand1.jpg";
import b2 from "../assets/images/brand2.jpg";
import b3 from "../assets/images/brand3.jpg";
import b4 from "../assets/images/brand4.jpg";
import b5 from "../assets/images/brand5.jpg";
import b6 from "../assets/images/brand6.jpg";
import b7 from "../assets/images/brand7.jpg";
import b8 from "../assets/images/brand8.jpg";
 
// Data
const services = [
  { id: "01", title: "Self healing property", img: s1 },
  { id: "02", title: "High gloss film", img: s2 },
  { id: "03", title: "Super hydrophobic property", img: s3 },
  { id: "04", title: "Excellent stain resistance", img: s4 },
  { id: "05", title: "Good optical clarity", img: s5 },
  { id: "06", title: "Anti-yellowing property", img: s6 },
];
 
const brands = [b1, b2, b3, b4, b5, b6, b7, b8];
 
export default function ServicesView() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
 
  return (
    <>
      <section
        style={{
          background: themes.backgroundBlack,
          color: themes.textWhite,
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          {/* HEADER */}
          <div ref={headerRef} className="text-center mb-14 pt-14">
            <div
              className={`transition-all duration-700 ease-out
                ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              <DecoratedTitle
                text="WELCOME TO Hogo Autofilms"
                style={{ color: themes.backgroundBlack }}
              />
            </div>
 
            <div
              className={`mt-4 transition-all duration-700 ease-out delay-150
                ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              <SectionHeading style={{ color: themes.textWhite }}>
                Premium Car Detailing
              </SectionHeading>
            </div>
 
            <p
              className={`max-w-2xl mx-auto mt-4 transition-all duration-700 ease-out delay-300
                ${headerVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form
            </p>
          </div>
 
          {/* SERVICES GRID */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                visible={gridVisible}
                delay={index * 450}
              />
            ))}
          </div>
        </div>
      </section>
 
      <BrandBand />
    </>
  );
}
 
/* ================= SERVICE CARD ================= */
 
function ServiceCard({ item, visible, delay }) {
  return (
    <div
      className={`
        relative group h-[220px] sm:h-[260px] md:h-[300px]
        rounded-2xl overflow-hidden
        transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 translate-x-12 translate-y-6"
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[5px]"
      />
 
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: themes.backgroundBlack,
          opacity: 0.6,
        }}
      />
 
      {/* Number */}
      <div
        className="absolute top-5 left-5 text-xl font-bold z-10"
        style={{ color: themes.textWhite }}
      >
        {item.id}
      </div>
 
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h3
          className="text-xl md:text-2xl font-semibold mb-4"
          style={{ color: themes.textWhite }}
        >
          {item.title}
        </h3>
 
        {/* Button animation (same system-wide style) */}
        <div
          className="
            opacity-0 translate-y-4
            transition-all duration-700 ease-out
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          <RollingButton text="View Details" />
        </div>
      </div>
    </div>
  );
}
 
/* ================= BRAND BAND ================= */
 
function BrandBand() {
  return (
    <div
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="flex gap-10 sm:gap-16 md:gap-24 w-max animate-marquee">
        {[...brands, ...brands].map((logo, i) => (
          <img
            key={i}
            src={logo}
            className="h-12 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition"
            alt="brand"
          />
        ))}
      </div>
    </div>
  );
}