// import car from "../assets/images/car.webp";

// export default function HomeHero() {
//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${car})` }}
//     >
//       {/* Dark overlay like original */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       <div className="relative max-w-7xl mx-auto px-6 text-white">
//         <h1
//           className="uppercase"
//           style={{
//             fontFamily: themes.fontPrimary,
//             fontSize: "72px",
//             fontWeight: "500",
//             lineHeight: "1.15",
//           }}
//         >
//           Where Every Detail <br />
//           Truly Matters
//         </h1>

//         <p
//           className="mt-6 max-w-xl"
//           style={{
//             fontFamily: themes.fontPrimary,
//             fontSize: "18px",
//             fontWeight: "400",
//           }}
//         >
//           Hogo Autofills offers efficient, reliable detailing that restores shine
//           and preserves your vehicle.
//         </p>

//         <div className="mt-10 flex gap-4">
//           <button className="px-7 py-3 rounded-md bg-[var(--primary)] text-white font-medium transition-all hover:bg-[var(--hover)] active:bg-[var(--active)]">
//             Get Quote
//           </button>

//           <button className="px-7 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition-all">
//             Our Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }














// import car from "../assets/images/car.webp";
// import RollingButton from "./RollingButton";

// export default function HomeHero() {
//   return (
//     <section className="relative w-full min-h-screen bg-black flex flex-col items-center pt-32 pb-16">
//       {/* ↑ pt-32 = space after navbar */}

//       {/* CONTENT (CENTERED LIKE IMAGE) */}
//       <div className="max-w-7xl mx-auto px-6 text-white text-center">
//         <h1
//           className="uppercase mx-auto"
//           style={{
//             fontFamily: themes.fontPrimary,
//             fontSize: "72px",
//             fontWeight: "500",
//             lineHeight: "1.15",
//           }}
//         >
//           Where Every
//           Detail Truly <br />
//           Matters
//         </h1>

//         <p
//           className="mt-6 max-w-xl mx-auto"
//           style={{
//             fontFamily: themes.fontPrimary,
//             fontSize: "18px",
//             fontWeight: "400",
//           }}
//         >
//           Hogo Autofills offers efficient, reliable detailing that restores shine
//           and preserves your vehicle.
//         </p>

//         {/* ONLY ONE BUTTON (AS YOU ASKED) */}
//         <div className="mt-10 flex justify-center">
//                      <RollingButton text="Get Quote" />

//         </div>
//       </div>

//       {/* CAR IMAGE BELOW CONTENT */}
//       <div className="mt-16 w-full flex justify-center">
//         <img
//           src={car}
//           alt="Car"
//           className="w-[80%] max-w-6xl object-contain"
//         />
//       </div>
//     </section>
//   );
// }













// import car from "../assets/images/car.webp";
// import RollingButton from "./RollingButton";

// export default function HomeHero() {
//   return (
//     <section className="relative w-full min-h-screen bg-[#7e7e7e] flex flex-col items-center pt-32 pb-16">
//       {/* CONTENT (CENTERED LIKE IMAGE) */}
//       <div className="max-w-7xl mx-auto px-6 text-white text-center">
//         <h1
//           className="uppercase mx-auto"
//           style={{
//             fontFamily: themes.fontPrimary,
//             fontSize: "72px",
//             fontWeight: "500",
//             lineHeight: "1.15",
//           }}
//         >
//           Where Every 
//           Detail Truly <br />
//           Matters
//         </h1>

//         <p
//           className="mt-6 max-w-xl mx-auto text-gray-300"
//           style={{
//             fontFamily: themes.fontPrimary,
//             fontSize: "18px",
//             fontWeight: "400",
//           }}
//         >
//           Hogo Autofills offers efficient, reliable detailing that restores shine
//           and preserves your vehicle.
//         </p>

//         {/* ONLY ONE BUTTON */}
//         <div className="mt-10 flex justify-center">
//           <RollingButton text="Get Quote" />
//         </div>
//       </div>

//       {/* CAR IMAGE BELOW CONTENT */}
//       <div className="mt-16 w-full flex justify-center">
//         <img
//           src={car}
//           alt="Car"
//           className="w-[80%] max-w-6xl object-contain"
//         />
//       </div>
//     </section>
//   );
// }









// import car from "../assets/images/car.webp";
// import RollingButton from "./RollingButton";
// import AboutView from "./AboutView"; // Import the AboutView component

// export default function HomeHero() {
//   return (
//     <>
//       <section className="relative w-full min-h-screen bg-[#7e7e7e] flex flex-col items-center pt-32 pb-16">
//         {/* CONTENT (CENTERED LIKE IMAGE) */}
//         <div className="max-w-7xl mx-auto px-6 text-white text-center">
//           <h1
//             className="uppercase mx-auto"
//             style={{
//               fontFamily: themes.fontPrimary,
//               fontSize: "72px",
//               fontWeight: "500",
//               lineHeight: "1.15",
//             }}
//           >
//             Where Every 
//             Detail Truly <br />
//             Matters
//           </h1>

//           <p
//             className="mt-6 max-w-xl mx-auto text-gray-300"
//             style={{
//               fontFamily: themes.fontPrimary,
//               fontSize: "18px",
//               fontWeight: "400",
//             }}
//           >
//             Hogo Autofills offers efficient, reliable detailing that restores shine
//             and preserves your vehicle.
//           </p>

//           {/* ONLY ONE BUTTON */}
//           <div className="mt-10 flex justify-center">
//             <RollingButton text="Get Quote" />
//           </div>
//         </div>

//         {/* CAR IMAGE BELOW CONTENT */}
//         <div className="mt-16 w-full flex justify-center">
//           <img
//             src={car}
//             alt="Car"
//             className="w-[80%] max-w-6xl object-contain"
//           />
//         </div>
//       </section>

//       {/* Add AboutView component below the hero section */}
//       <AboutView />
//     </>
//   );
// }



















































// import car from "../assets/images/car.webp";
// import RollingButton from "./RollingButton";
// import AboutView from "./AboutView";
// import { themes } from "../config/themeConfig"; // make sure path is correct
// import ServicesView from "./ServicesView";

// export default function HomeHero() {
//   return (
//     <>
//       <section
//         className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-24"
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         {/* CONTENT (CENTERED LIKE IMAGE) */}
//         <div className="max-w-7xl mx-auto px-6 text-white text-center">
//           <h1
//             className="uppercase mx-auto"
//             style={{
//               fontFamily: themes.fontPrimary,
//               fontSize: "72px",
//               fontWeight: "500",
//               lineHeight: "1.15",
//             }}
//           >
//             Where Every <br />
//             Detail Truly <br />
//             Matters
//           </h1>

//           <p
//             className="mt-6 max-w-xl mx-auto text-gray-300"
//             style={{
//               fontFamily: themes.fontPrimary,
//               fontSize: "18px",
//               fontWeight: "400",
//             }}
//           >
//             Hogo Autofills offers efficient, reliable detailing that restores shine
//             and preserves your vehicle.
//           </p>

//           {/* ONLY ONE BUTTON */}
//           <div className="mt-10 flex justify-center">
//             <RollingButton text="Get Quote" />
//           </div>
//         </div>

//         {/* CAR IMAGE BELOW CONTENT */}
//         <div className="mt-20 w-full flex justify-center">
//           <img
//             src={car}
//             alt="Car"
//             className="w-[80%] max-w-6xl object-contain"
//           />
//         </div>
//       </section>

//       {/* ===== SPACING BEFORE ABOUT SECTION ===== */}
//       <div className="py-16 bg-[#7e7e7e]">
//         <AboutView />
//       </div>
//          <div className="py-16 bg-[#7e7e7e]">
//         <ServicesView />
//       </div>
//     </>
//   );
// }







import car from "../assets/images/car.webp";
import RollingButton from "./RollingButton";
import AboutView from "./AboutView";
import ServicesView from "./ServicesView";
import ParallaxCarSection from "./ParallaxCarSection";
import websiteBackground from "../assets/images/website-background.webp"; // adjust path if needed

import { themes } from "../config/themeConfig";
import WhyChoose from "./WhyChoose";
import TestimonialsView from "./TestimonialView";
import FAQView from "./FAQView";
import CtaView from "./CtaView";
import InstagramView from "./InstagramView";
import BeforeAfterView from "./BeforeAfterView";

export default function HomeHero() {
  return (
    <>
<section
  className="
    relative w-full min-h-screen 
    flex flex-col items-center 
    pt-32 pb-32 
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: `url(${websiteBackground})`,
    backgroundColor: themes.backgroundBlack,
  }}
>
  {/* 🔹 LIGHT OVERLAY (BACKGROUND OPACITY DOWN) */}
  <div className="absolute inset-0 bg-black/60"></div>
  {/* ↑ change 20/30/40 as per need */}

  {/* CONTENT (ABOVE OVERLAY) */}
  <div
    className="relative max-w-7xl mx-auto px-6 text-center"
    style={{ color: themes.textWhite }}
  >
<h1
  className="
    uppercase text-center mx-auto
    text-[clamp(28px,4.5vw,72px)]
    leading-[1.08]
    max-w-[14ch] md:max-w-[18ch]
    text-balance
  "
>
  Where Every Detail Truly Matters
</h1>





    <p
      className="mt-6 max-w-xl mx-auto"
      style={{
        fontFamily: themes.fontPrimary,
        fontSize: "18px",
        fontWeight: "400",
        color: themes.textWhite,
        opacity: 0.8,
      }}
    >
orem Ipsum is therefore always free from repetition, always free from repetition injected humour, or non-characteristic words etc.


    </p>

    {/* BUTTON */}
    <div className="mt-10 flex justify-center">
      <RollingButton text="Get Quote" />
    </div>
  </div>

  {/* CAR IMAGE */}
  <div className="relative mt-20 w-full flex justify-center">
    <img
      src={car}
      alt="Car"
      className="w-[90%] sm:w-[85%] md:w-[80%] max-w-6xl object-contain"
    />
  </div>
</section>


      {/* SERVICES SECTION */}
      <div
        className=""
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <ServicesView />
      </div>

      {/* ABOUT SECTION */}
      <div
        className="py-16"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <AboutView />
      </div>

      {/* Cta SECTION */}
      <div
        className=""
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <CtaView />
      </div>

      {/* testimonial SECTION */}
      <div
        className="py-8 sm:py-12 md:py-16"
        style={{ backgroundColor: themes.backgroundBlack }}
      >
        <TestimonialsView />
      </div>



      {/* whychoose SECTION */}
      <div className="" style={{ backgroundColor: themes.backgroundBlack }}>
        <WhyChoose />
      </div>

          {/* BeforeAfterView SECTION */}
      <div
        className=""
        style={{ backgroundColor: themes.backgroundBlack }}
      >
        <BeforeAfterView />
      </div>

      {/* parallax SECTION */}
      <div
        className="py-8 sm:py-12 md:py-16"
        style={{ backgroundColor: themes.backgroundBlack }}
      >
        <ParallaxCarSection />
      </div>
                {/* FAQ SECTION */}
      <div
        className=""
        style={{ backgroundColor: themes.backgroundBlack }}
      >
        <FAQView />
      </div>

                {/* Instagram SECTION */}
      <div
        className=""
        style={{ backgroundColor: themes.backgroundBlack }}
      >
        <InstagramView />
      </div>



    </>
  );
}
