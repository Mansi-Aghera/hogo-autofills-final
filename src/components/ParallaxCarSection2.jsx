// import { themes } from "../config/themeConfig";
// import bgCar from "../assets/images/background-car.webp";

// export default function ParallaxCarSection() {
//   return (
//     <section
//       className="relative w-full py-20 md:py-28 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url(${bgCar})`,
//         backgroundAttachment: "fixed",
//         backgroundColor: themes.backgroundBlack,
//       }}
//     >
//       {/* 🔥 DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* 🔥 CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">

//         {/* TITLE */}
//         <h2 className="text-[26px] md:text-[42px] font-semibold mb-6">
//           About HOGO AUTOFILMS India Pvt. Ltd.
//         </h2>

//         {/* TEXT */}
//         <div className="space-y-5 text-[13px] md:text-[15px] leading-relaxed text-gray-200">

          

//           <p>
//             This commitment to excellence has earned approvals from major OEMs
//             such as Maruti Suzuki, Hyundai Motor India, Mahindra & Mahindra, and
//             MG Motor reinforcing its reputation as a trusted partner for
//             high-quality automotive solutions.
//           </p>

//           <p>
//             Recognizing the rapid growth of the car detailing industry, the group
//             strategically diversified into the premium automotive care segment
//             with the launch of advanced solutions under the brand HOGONN.
//           </p>

//           <p>
//             At the heart of this journey lies a guiding principle “Quality and
//             Consistency in Quality.”
//           </p>

//           <p>
//             Our products are developed using advanced technologies, premium raw
//             materials, and rigorous quality control processes.
//           </p>

//           <p>
//             With a strong legacy and a forward-looking vision, HOGO AUTOFILMS
//             India Pvt. Ltd. remains committed to delivering innovative,
//             reliable, and world-class automotive care solutions ensuring
//             exceptional value and complete customer satisfaction.
//           </p>

//         </div>
//       </div>

//       {/* 🔥 TOP FADE */}
//       <div
//         className="absolute top-0 left-0 w-full h-[25%]"
//         style={{
//           background: `linear-gradient(
//             to bottom,
//             ${themes.backgroundBlack} 0%,
//             rgba(15, 15, 15, 0.6) 60%,
//             rgba(15, 15, 15, 0) 100%
//           )`,
//         }}
//       />

//       {/* 🔥 BOTTOM FADE */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-[25%]"
//         style={{
//           background: `linear-gradient(
//             to top,
//             ${themes.backgroundBlack} 0%,
//             rgba(15, 15, 15, 0.6) 60%,
//             rgba(15, 15, 15, 0) 100%
//           )`,
//         }}
//       />
//     </section>
//   );
// }

import { themes } from "../config/themeConfig";
import bgCar from "../assets/images/background-car.webp";

export default function ParallaxCarSection() {
  return (
    <section
      className="relative w-full py-24 md:py-36 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgCar})`,
        backgroundAttachment: "fixed",
        backgroundColor: themes.backgroundBlack,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TOP FADE */}
      <div
        className="absolute top-0 left-0 w-full h-[30%]"
        style={{
          background: `linear-gradient(to bottom, ${themes.backgroundBlack} 0%, rgba(15,15,15,0.5) 60%, rgba(15,15,15,0) 100%)`,
        }}
      />

      {/* BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 w-full h-[30%]"
        style={{
          background: `linear-gradient(to top, ${themes.backgroundBlack} 0%, rgba(15,15,15,0.5) 60%, rgba(15,15,15,0) 100%)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-white flex flex-col items-center">

        {/* TOP ACCENT LINE */}
        <div
          className="w-12 h-[3px] rounded-full mb-8"
          style={{ backgroundColor: themes.primary }}
        />

        {/* TITLE */}
        <h2 className="text-[26px] sm:text-[34px] md:text-[44px] font-semibold text-center leading-tight tracking-wide mb-8">
          About HOGO AUTOFILMS
          <br />
          <span className="text-[18px] sm:text-[22px] md:text-[28px] font-light opacity-75 tracking-widest">
            India Pvt. Ltd.
          </span>
        </h2>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 mb-10 w-full justify-center">
          <div className="flex-1 max-w-[80px] h-[1px] bg-white/20" />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: themes.primary }}
          />
          <div className="flex-1 max-w-[80px] h-[1px] bg-white/20" />
        </div>

        {/* PARAGRAPHS */}
        <div className="space-y-6 text-[13px] sm:text-[14px] md:text-[15px] leading-[2] text-white/70 text-center">
          <p>
            Recognizing the rapid growth of the car detailing industry, the group
            strategically diversified into the premium automotive care segment
            with the launch of advanced solutions under the brand HOGONN.
          </p>

          <p>
            At the heart of this journey lies a guiding principle "Quality and
            Consistency in Quality."
          </p>

          <p>
            Our products are developed using advanced technologies, premium raw
            materials, and rigorous quality control processes.
          </p>

          <p>
            With a strong legacy and a forward-looking vision, HOGO AUTOFILMS
            India Pvt. Ltd. remains committed to delivering innovative,
            reliable, and world-class automotive care solutions ensuring
            exceptional value and complete customer satisfaction.
          </p>
        </div>

        {/* BOTTOM ACCENT LINE */}
        <div
          className="w-12 h-[3px] rounded-full mt-10"
          style={{ backgroundColor: themes.primary }}
        />

      </div>
    </section>
  );
}