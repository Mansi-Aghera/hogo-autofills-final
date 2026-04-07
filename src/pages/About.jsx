// import { useRef, useEffect, useState } from "react";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/about-us-page-bg.webp";
// import aboutImg1 from "../assets/images/car-detailing-upper-img.webp";
// import aboutImg2 from "../assets/images/aboutpage4.jpeg";
// import DecoratedTitle from "../components/DecoratedTitle";

// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// import team1 from "../assets/images/car-detailing-upper-img.webp";
// import team2 from "../assets/images/about-us-card-2nd.webp";
// import team3 from "../assets/images/aboutpage1.jpeg";
// import team4 from "../assets/images/about-us-card-4th.webp";
// import { Link } from "react-router-dom";
// import InnerBanner from "../components/InnerBanner";
// import aboutBanner from "../assets/images/carModify2.png";
// // import aboutBanner from "../assets/images/carModify.png";
// import ParallaxCarSection2 from "../components/ParallaxCarSection2";

// export default function About() {
//   /* ================= HERO ANIMATION ================= */
//   const heroRef = useRef(null);
//   const [heroVisible, setHeroVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setHeroVisible(true);
//       },
//       { threshold: 0.3 },
//     );

//     if (heroRef.current) observer.observe(heroRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       {/* ================= ABOUT HERO ================= */}
//       <InnerBanner
//         title="About Us"
//         current="About Us"
//         bg={aboutBanner}
//       />

//       {/* ================= ABOUT CONTENT ================= */}
//       <section
//         className="sm:py-16 px-4 sm:px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:pb-0 md:pb-0 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* LEFT IMAGES */}
//           <div className="relative w-full">

//             {/* 🔥 DESKTOP OVERLAP */}
//             <div className="hidden lg:block relative h-[520px]">

//               {/* FRONT */}
//               <div className="absolute z-20 w-[48%] aspect-[4/5] left-0 top-0">
//                 <img
//                   src={team3}
//                   alt="Expert"
//                   className="w-full h-full object-cover rounded-xl shadow-2xl"
//                 />
//               </div>

//               {/* BACK */}
//               <div className="absolute z-10 w-[48%] aspect-[4/5] left-[38%] top-[14%]">
//                 <img
//                   src={aboutImg2}
//                   alt="Workshop"
//                   className="w-full h-full object-cover rounded-xl shadow-xl"
//                 />
//               </div>
//             </div>

//             {/* 🧩 TABLET — SIDE BY SIDE */}
//             {/* 🧩 TABLET — SIDE BY SIDE (SMALL SIZE) */}
//             <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 justify-center max-w-[520px] mx-auto">
//               <div className="aspect-[4/5]">
//                 <img
//                   src={aboutImg1}
//                   alt="Expert"
//                   className="w-full h-full object-cover rounded-xl shadow-xl"
//                 />
//               </div>

//               <div className="aspect-[4/5]">
//                 <img
//                   src={aboutImg2}
//                   alt="Workshop"
//                   className="w-full h-full object-cover rounded-xl shadow-xl"
//                 />
//               </div>
//             </div>


//             {/* 📱 MOBILE — STACK */}
//             {/* 📱 MOBILE — SMALL STACKED IMAGES */}
//             <div className="grid sm:hidden gap-5 max-w-[280px] mx-auto">
//               <div className="aspect-[4/5]">
//                 <img
//                   src={aboutImg1}
//                   alt="Expert"
//                   className="w-full h-full object-cover rounded-xl shadow-xl"
//                 />
//               </div>

//               <div className="aspect-[4/5]">
//                 <img
//                   src={aboutImg2}
//                   alt="Workshop"
//                   className="w-full h-full object-cover rounded-xl shadow-xl"
//                 />
//               </div>
//             </div>


//           </div>


//           {/* RIGHT CONTENT */}
//           <div className="text-center lg:text-left">
//             <div className="flex justify-center lg:justify-start mb-4">
//               <DecoratedTitle text="ABOUT US" color={themes.backgroundBlack} />
//             </div>

//             <h2
//               className="text-[clamp(28px,4vw,56px)] font-semibold leading-tight mb-6"
//               style={{
//                 color: themes.backgroundBlack,
//                 fontFamily: themes.fontPrimary,
//               }}
//             >
//               Restoring Lasting Shine, Inside and Out
//             </h2>



//             <p className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
//               style={{ color: themes.backgroundBlack }}>
//               HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over
//               46 years in the automotive industry. Since its inception in 1979,
//               the group has been driven by a clear vision to deliver uncompromised
//               quality and lasting value to customers.
//             </p>

//             <p className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
//               style={{ color: themes.backgroundBlack }}>
//               With an unwavering focus on quality and consistency, the organization
//               established a strong presence across automotive accessories and auto
//               components. Over the years, it expanded its portfolio to include
//               premium seat covers, body covers, floor mats, steering covers, and a
//               wide range of auto components, serving both the aftermarket and
//               leading automobile manufacturers.
//             </p>



//             {/* <p
//               className="leading-relaxed max-w-xl mx-auto lg:mx-0"
//               style={{ color: themes.backgroundGray }}
//             >
//               From exterior hand washing to ceramic coating, we focus on detail,
//               trust, and long-term care to keep your car at its best.
//             </p> */}
//           </div>
//         </div>
//       </section>
//       <section>
//         <ParallaxCarSection2 />
//       </section>
//       {/* ================= TEAM SECTION ================= */}
//       {/* <section
//         className="py-20 px-4 sm:px-6"
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
//             {[
//               {
//                 img: team1,
//                 name: "Rajesh Sharma",
//                 role: "Lead Detail Specialist",
//               },
//               {
//                 img: team2,
//                 name: "Ramesh Varma",
//                 role: "Customer Care Manager",
//               },
//               {
//                 img: team3,
//                 name: "Nilesh Gupta",
//                 role: "Paint Correction Expert",
//               },
//               {
//                 img: team4,
//                 name: "Jayesh Ahir",
//                 role: "Ceramic Coating Technician",
//               },
//             ].map((member, i) => (
//               <div
//                 key={i}
//                 className="
//                   rounded-xl overflow-hidden
//                   shadow-xl
//                   transition-all duration-300
//                   hover:-translate-y-2
//                 "
//                 style={{ backgroundColor: themes.backgroundGray }}
//               >
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-[320px] object-cover"
//                   style={{ backgroundColor: themes.backgroundBlack }}
//                 />

//                 <div className="p-3 text-center">
//                   <h3
//                     className="text-xl font-semibold"
//                     style={{ color: themes.backgroundBlack }}
//                   >
//                     {member.name}
//                   </h3>

//                   <p
//                     className="text-sm mt-2"
//                     style={{ color: themes.backgroundBlack }}
//                   >
//                     {member.role}
//                   </p>

//                   <div className="flex justify-center gap-4 mt-2">
//                     {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, idx) => (
//                       <div
//                         key={idx}
//                         className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all"
//                         style={{ backgroundColor: themes.backgroundBlack }}
//                         onMouseEnter={(e) =>
//                           (e.currentTarget.style.backgroundColor = themes.hover)
//                         }
//                         onMouseLeave={(e) =>
//                           (e.currentTarget.style.backgroundColor =
//                             themes.backgroundBlack)
//                         }
//                       >
//                         <Icon size={18} style={{ color: themes.textWhite }} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* ================= VISION & MISSION ================= */}
//       {/* <section
//         className="py-20 px-4 sm:px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           <div>
//             <h3
//               className="text-xl font-semibold mb-6"
//               style={{
//                 color: themes.backgroundBlack,
//                 fontFamily: themes.fontPrimary,
//               }}
//             >
//               Our Vision
//             </h3>

//             <p
//               className="text-lg leading-[1.9] max-w-xl"
//               style={{ color: themes.backgroundBlack }}
//             >
//               To lead the industry with trusted, high-quality auto detailing
//               services that enhance vehicle aesthetics, protect surfaces, and
//               deliver unmatched customer satisfaction.
//             </p>
//           </div>

//           <div>
//             <h3
//               className="text-xl font-semibold mb-8"
//               style={{
//                 color: themes.backgroundBlack,
//                 fontFamily: themes.fontPrimary,
//               }}
//             >
//               Our Mission
//             </h3>

//             {[1, 2, 3].map((num) => (
//               <div key={num} className="flex gap-6 items-start mb-8">
//                 <div
//                   className="
//                     w-12 h-12
//                     flex items-center justify-center
//                     rounded-full
//                     font-semibold
//                     leading-none
//                     flex-shrink-0
//                   "
//                   style={{
//                     backgroundColor: themes.primary,
//                     color: themes.backgroundBlack,
//                   }}
//                 >
//                   {num}
//                 </div>

//                 <p
//                   className="leading-relaxed"
//                   style={{ color: themes.backgroundBlack }}
//                 >
//                   {num === 1 && (
//                     <>
//                       <span>Premium Car Care:</span> Professional detailing
//                       solutions.
//                     </>
//                   )}
//                   {num === 2 && (
//                     <>
//                       <span>Sustainable Practices:</span> Eco-friendly methods.
//                     </>
//                   )}
//                   {num === 3 && (
//                     <>
//                       <span>Customer Excellence:</span> Reliable service and
//                       transparent communication.
//                     </>
//                   )}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </>
//   );
// }

import { useRef, useEffect, useState } from "react";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/about-us-page-bg.webp";
import aboutImg1 from "../assets/images/car-detailing-upper-img.webp";
import aboutImg2 from "../assets/images/aboutpage4.jpeg";
import DecoratedTitle from "../components/DecoratedTitle";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import team1 from "../assets/images/car-detailing-upper-img.webp";
import team2 from "../assets/images/about-us-card-2nd.webp";
import team3 from "../assets/images/aboutpage1.jpeg";
import team4 from "../assets/images/about-us-card-4th.webp";
import { Link } from "react-router-dom";
import InnerBanner from "../components/InnerBanner";
import aboutBanner from "../assets/images/carModify2.png";
// import aboutBanner from "../assets/images/carModify.png";
import ParallaxCarSection2 from "../components/ParallaxCarSection2";

export default function About() {
  /* ================= HERO ANIMATION ================= */
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeroVisible(true);
      },
      { threshold: 0.3 },
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <InnerBanner
        title="About Us"
        current="About Us"
        bg={aboutBanner}
      />

      {/* ================= ABOUT CONTENT ================= */}
      <section
        className="sm:py-16 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:pb-0 md:pb-0 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT IMAGES */}
          <div className="relative w-full">

            {/* 🔥 DESKTOP OVERLAP */}
            <div className="hidden lg:block relative h-[520px]">

              <div className="absolute z-20 w-[48%] aspect-[4/5] left-0 top-0">
                <img
                  src={team3}
                  alt="Expert"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>

              <div className="absolute z-10 w-[48%] aspect-[4/5] left-[38%] top-[14%]">
                <img
                  src={aboutImg2}
                  alt="Workshop"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>

            {/* 🧩 TABLET */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 justify-center max-w-[520px] mx-auto">
              <div className="aspect-[4/5]">
                <img
                  src={aboutImg1}
                  alt="Expert"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>

              <div className="aspect-[4/5]">
                <img
                  src={aboutImg2}
                  alt="Workshop"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>

            {/* 📱 MOBILE */}
            <div className="grid sm:hidden gap-5 max-w-[280px] mx-auto">
              <div className="aspect-[4/5]">
                <img
                  src={aboutImg1}
                  alt="Expert"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>

              <div className="aspect-[4/5]">
                <img
                  src={aboutImg2}
                  alt="Workshop"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-12">
              <DecoratedTitle text="ABOUT US" color={themes.backgroundBlack} />
            </div>

            <p
              className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
              style={{ color: themes.backgroundBlack }}
            >
              HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over
              46 years in the automotive industry. Since its inception in 1979,
              the group has been driven by a clear vision to deliver uncompromised
              quality and lasting value to customers.
            </p>

            <p
              className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
              style={{ color: themes.backgroundBlack }}
            >
              With an unwavering focus on quality and consistency, the organization
              established a strong presence across automotive accessories and auto
              components. Over the years, it expanded its portfolio to include
              premium seat covers, body covers, floor mats, steering covers, and a
              wide range of auto components, serving both the aftermarket and
              leading automobile manufacturers.       This commitment to excellence has earned approvals from major OEMs
            such as Maruti Suzuki, Hyundai Motor India, Mahindra & Mahindra, and
            MG Motor reinforcing its reputation as a trusted partner for
            high-quality automotive solutions.
            </p>
            <p
              className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
              style={{ color: themes.backgroundBlack }}
            >
            This commitment to excellence has earned approvals from major OEMs
            such as Maruti Suzuki, Hyundai Motor India, Mahindra & Mahindra, and
            MG Motor reinforcing its reputation as a trusted partner for
            high-quality automotive solutions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <ParallaxCarSection2 />
      </section>
    </>
  );
}