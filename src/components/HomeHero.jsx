//  black blue logo grey

import car from "../assets/images/car.webp";
import RollingButton from "./RollingButton";
import AboutView from "./AboutView";
import ServicesView from "./ServicesView";
import ParallaxCarSection from "./ParallaxCarSection";
import websiteBackground from "../assets/images/website-background.webp"; 

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
{/* <section
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
> */}


<section
  className="
    relative w-full min-h-screen 
    flex flex-col items-center 
    pt-32 pb-32 
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundColor: themes.backgroundBlack,
  }}
>


  {/* 🔹 LIGHT OVERLAY (BACKGROUND OPACITY DOWN) */}
<div
  className="absolute inset-0"
  style={{
    backgroundColor: themes.backgroundBlack,
    opacity: 0.6,
  }}
></div>
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






// template 



// import car from "../assets/images/red-car.webp";
// import RollingButton from "./RollingButton";
// import AboutView from "./AboutView";
// import ServicesView from "./ServicesView";
// import ParallaxCarSection from "./ParallaxCarSection";

// import { themes } from "../config/themeConfig";
// import WhyChoose from "./WhyChoose";
// import TestimonialsView from "./TestimonialView";
// import FAQView from "./FAQView";
// import CtaView from "./CtaView";
// import InstagramView from "./InstagramView";
// import BeforeAfterView from "./BeforeAfterView";

// export default function HomeHero() {
//   return (
//     <>
// {/* <section
//   className="
//     relative w-full min-h-screen 
//     flex flex-col items-center 
//     pt-32 pb-32 
//     bg-cover bg-center bg-no-repeat
//   "
//   style={{
//     backgroundImage: `url(${websiteBackground})`,
//     backgroundColor: themes.backgroundBlack,
//   }}
// > */}


// <section
//   className="
//     relative w-full min-h-screen 
//     flex flex-col items-center 
//     pt-32 pb-32 
//     bg-cover bg-center bg-no-repeat
//   "
//   style={{
//     backgroundColor: themes.backgroundBlack,
//   }}
// >
//   {/* 🔹 LIGHT OVERLAY (BACKGROUND OPACITY DOWN) */}
// <div
//   className="absolute inset-0"
//   style={{
//     backgroundColor: themes.backgroundBlack,
//     opacity: 0.6,
//   }}
// ></div>
//   {/* ↑ change 20/30/40 as per need */}

//   {/* CONTENT (ABOVE OVERLAY) */}
//   <div
//     className="relative max-w-7xl mx-auto px-6 text-center"
//     style={{ color: themes.textWhite }}
//   >
// <h1
//   className="
//     uppercase text-center mx-auto
//     text-[clamp(28px,4.5vw,72px)]
//     leading-[1.08]
//     max-w-[14ch] md:max-w-[18ch]
//     text-balance
//   "
// >
//   Where Every Detail Truly Matters
// </h1>





//     <p
//       className="mt-6 max-w-xl mx-auto"
//       style={{
//         fontFamily: themes.fontPrimary,
//         fontSize: "18px",
//         fontWeight: "400",
//         color: themes.textWhite,
//         opacity: 0.8,
//       }}
//     >
// orem Ipsum is therefore always free from repetition, always free from repetition injected humour, or non-characteristic words etc.


//     </p>

//     {/* BUTTON */}
//     <div className="mt-10 flex justify-center">
//       <RollingButton text="Get Quote" />
//     </div>
//   </div>

//   {/* CAR IMAGE */}
//   <div className="relative mt-20 w-full flex justify-center">
//     <img
//       src={car}
//       alt="Car"
//       className="w-[90%] sm:w-[85%] md:w-[80%] max-w-6xl object-contain"
//     />
//   </div>
// </section>


//       {/* SERVICES SECTION */}
//       <div
//         className=""
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <ServicesView />
//       </div>

//       {/* ABOUT SECTION */}
//       <div
//         className="py-16"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <AboutView />
//       </div>

//       {/* Cta SECTION */}
//       <div
//         className=""
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <CtaView />
//       </div>

//       {/* testimonial SECTION */}
//       <div
//         className="py-8 sm:py-12 md:py-16"
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <TestimonialsView />
//       </div>



//       {/* whychoose SECTION */}
//       <div className="" style={{ backgroundColor: themes.backgroundBlack }}>
//         <WhyChoose />
//       </div>

//           {/* BeforeAfterView SECTION */}
//       <div
//         className=""
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <BeforeAfterView />
//       </div>

//       {/* parallax SECTION */}
//       <div
//         className="py-8 sm:py-12 md:py-16"
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <ParallaxCarSection />
//       </div>
//                 {/* FAQ SECTION */}
//       <div
//         className=""
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <FAQView />
//       </div>

//                 {/* Instagram SECTION */}
//       <div
//         className=""
//         style={{ backgroundColor: themes.backgroundBlack }}
//       >
//         <InstagramView />
//       </div>



//     </>
//   );
// }
