// import { Link } from "react-router-dom";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/contactBanner.jpg";
// import RollingButton from "../components/RollingButton";
// import contactImg from "../assets/images/contactImg.jpg";
// import DecoratedTitle from "../components/DecoratedTitle";

// export default function ContactPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section
//         className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
//         />

//         <div className="relative z-10 max-w-4xl w-full">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{
//               color: themes.textWhite,
//               fontFamily: themes.fontPrimary,
//             }}
//           >
//             Contact
//           </h1>

//           <div className="w-full h-[1px] my-6 bg-white/20" />

//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link
//               to="/"
//               className="font-bold transition"
//               style={{ color: themes.backgroundGray }}
//             >
//               Home
//             </Link>

//             <span style={{ color: themes.textWhite }}>›</span>

//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Contact
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section
//         className="py-24 px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
//           {/* LEFT PARALLAX IMAGE */}
//           {/* LEFT PARALLAX IMAGE PANEL */}
//           <div
//             className="relative rounded-2xl overflow-hidden min-h-[420px]"
//             style={{
//               backgroundImage: `url(${contactImg})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundAttachment: "fixed",
//             }}
//           >
//             {/* Dark overlay */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 backgroundColor: themes.backgroundBlack,
//                 opacity: 0.6,
//               }}
//             />

//             {/* Bottom natural blur fade */}
//             {/* <div
//   className="absolute bottom-0 left-0 w-full h-[40%]"
//   style={{
//     background: `linear-gradient(
//       to top,
//       ${themes.backgroundBlack} 0%,
//       rgba(0,0,0,0.85) 40%,
//       rgba(0,0,0,0.3) 65%,
//       rgba(0,0,0,0) 100%
//     )`,
//     backdropFilter: "blur(10px)",
//   }}
// ></div> */}

//             {/* Content */}
//             <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-center">
//               <DecoratedTitle text="GET IN TOUCH" />

//               <h2
//                 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 py-6"
//                 style={{
//                   color: themes.textWhite,
//                   fontFamily: themes.fontPrimary,
//                 }}
//               >
//                 We are always ready to help you
//               </h2>

//               <p
//                 className="text-base sm:text-lg opacity-90 max-w-md"
//                 style={{ color: themes.textWhite }}
//               >
//                 Whether you have a question, a suggestion, or just want to say
//                 hello, this is the place to do it. Fill the form and we’ll get
//                 back to you.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div
//             className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-12"
//             style={{ backgroundColor: themes.backgroundBlack }}
//           >
//             <h3
//               className="text-2xl sm:text-3xl font-bold mb-8"
//               style={{ color: themes.textWhite }}
//             >
//               Get In Touch
//             </h3>

//             <form className="space-y-6">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none"
//                 style={{
//                   borderColor: themes.textWhite,
//                   color: themes.textWhite,
//                 }}
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none"
//                 style={{
//                   borderColor: themes.textWhite,
//                   color: themes.textWhite,
//                 }}
//               />

//               <input
//                 type="tel"
//                 placeholder="Your Phone"
//                 className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none"
//                 style={{
//                   borderColor: themes.textWhite,
//                   color: themes.textWhite,
//                 }}
//               />

//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                 className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none resize-none"
//                 style={{
//                   borderColor: themes.textWhite,
//                   color: themes.textWhite,
//                 }}
//               />

//               <RollingButton text="Send Message" />
//             </form>
//           </div>
//         </div>
//       </section>
//       {/* LOCATIONS SECTION */}
//       <section
//         className="py-10 px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left">
//           {/* Card 1 */}
//           <div className="space-y-4">
//             <h3
//               className="text-xl font-bold"
//               style={{ color: themes.backgroundBlack }}
//             >
//               AutoDetail HQ
//             </h3>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               📍 125 Sunset Blvd, Los Angeles, CA
//             </p>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               📞 (213) 555-0181
//             </p>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               ⏰ Monday - Friday 08.00 - 18.00
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="space-y-4">
//             <h3
//               className="text-xl font-bold"
//               style={{ color: themes.backgroundBlack }}
//             >
//               AutoDetail East
//             </h3>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               📍 802 Riverfront Drive, Riverside, CA
//             </p>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               📞 (951) 555-0264
//             </p>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               ⏰ Monday - Friday 08.00 - 18.00
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="space-y-4">
//             <h3
//               className="text-xl font-bold"
//               style={{ color: themes.backgroundBlack }}
//             >
//               AutoDetail North
//             </h3>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               📍 3300 Silverstone Ave, San Jose, CA
//             </p>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               📞 (408) 555-0390
//             </p>

//             <p
//               className="flex items-center justify-center lg:justify-start gap-2 text-sm"
//               style={{ color: themes.backgroundBlack }}
//             >
//               ⏰ Monday - Friday 08.00 - 18.00
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




 
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/contactBanner.jpg";
import RollingButton from "../components/RollingButton";
import contactImg from "../assets/images/contactImg.jpg";
import DecoratedTitle from "../components/DecoratedTitle";
 
export default function ContactPage() {
  /* ================= HERO ANIMATION ================= */
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeroVisible(true);
      },
      { threshold: 0.3 }
    );
 
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        />
 
        {/* HERO CONTENT (ANIMATED) */}
        <div
          ref={heroRef}
          className={`
            relative z-10 max-w-4xl w-full
            transition-all duration-700 ease-out
            ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              color: themes.textWhite,
              fontFamily: themes.fontPrimary,
            }}
          >
            Contact
          </h1>
 
          <div className="w-full h-[1px] my-6 bg-white/20" />
 
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link
              to="/"
              className="font-bold transition"
              style={{ color: themes.backgroundGray }}
            >
              Home
            </Link>
 
            <span style={{ color: themes.textWhite }}>›</span>
 
            <span className="font-bold" style={{ color: themes.textWhite }}>
              Contact
            </span>
          </div>
        </div>
      </section>
 
      {/* ================= CONTACT SECTION ================= */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT IMAGE */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[420px]"
            style={{
              backgroundImage: `url(${contactImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: themes.backgroundBlack,
                opacity: 0.6,
              }}
            />
 
            <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-center">
              <DecoratedTitle text="GET IN TOUCH" />
 
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 py-6"
                style={{
                  color: themes.textWhite,
                  fontFamily: themes.fontPrimary,
                }}
              >
                We are always ready to help you
              </h2>
 
              <p
                className="text-base sm:text-lg opacity-90 max-w-md"
                style={{ color: themes.textWhite }}
              >
                Whether you have a question, a suggestion, or just want to say
                hello, this is the place to do it. Fill the form and we’ll get
                back to you.
              </p>
            </div>
          </div>
 
          {/* RIGHT FORM */}
          <div
            className="rounded-2xl p-8 sm:p-12"
            style={{ backgroundColor: themes.backgroundBlack }}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: themes.textWhite }}
            >
              Get In Touch
            </h3>
 
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none"
                style={{
                  borderColor: themes.textWhite,
                  color: themes.textWhite,
                }}
              />
 
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none"
                style={{
                  borderColor: themes.textWhite,
                  color: themes.textWhite,
                }}
              />
 
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none"
                style={{
                  borderColor: themes.textWhite,
                  color: themes.textWhite,
                }}
              />
 
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-lg bg-transparent border outline-none resize-none"
                style={{
                  borderColor: themes.textWhite,
                  color: themes.textWhite,
                }}
              />
 
              <RollingButton text="Send Message" />
            </form>
          </div>
        </div>
      </section>
 
      {/* ================= LOCATIONS ================= */}
      <section
        className="py-10 px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left ">
          {/* Location Cards (UNCHANGED) */}
          {[
            {
              title: "AutoDetail HQ",
              address: "📍 125 Sunset Blvd, Los Angeles, CA",
              phone: "📞 (213) 555-0181",
            },
            {
              title: "AutoDetail East",
              address: "📍 802 Riverfront Drive, Riverside, CA",
              phone: "📞 (951) 555-0264",
            },
            {
              title: "AutoDetail North",
              address: "📍 3300 Silverstone Ave, San Jose, CA",
              phone: "📞 (408) 555-0390",
            },
          ].map((loc, i) => (
            <div key={i} className="space-y-4 rounded-xl shadow-md p-6" style={{ backgroundColor: themes.textWhite }}>
              <h3
                className="text-xl font-bold"
                style={{ color: themes.backgroundBlack }}
              >
                {loc.title}
              </h3>
 
              <p className="text-sm" style={{ color: themes.backgroundBlack }}>
                {loc.address}
              </p>
 
              <p className="text-sm" style={{ color: themes.backgroundBlack }}>
                {loc.phone}
              </p>
 
              <p className="text-sm" style={{ color: themes.backgroundBlack }}>
                ⏰ Monday - Friday 08.00 - 18.00
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
 
 