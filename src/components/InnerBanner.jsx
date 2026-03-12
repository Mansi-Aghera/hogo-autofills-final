

// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { themes } from "../config/themeConfig";

// export default function InnerBanner({ title, current, bg }) {
//   const [heroVisible, setHeroVisible] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setHeroVisible(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (heroRef.current) observer.observe(heroRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="relative w-full h-[320px] flex items-center justify-center text-center px-6"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/65" />

//       <div
//         ref={heroRef}
//         className={`relative z-10 max-w-4xl w-full
//           transition-all duration-700 ease-out
//           ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//           animate-[fadeUp_0.8s_ease-out]`}
//       >
//         <h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold"
//           style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
//         >
//           {title}
//         </h1>

//         <div className="w-full h-[1px] my-6 bg-white/20" />

//         <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//           <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
//             Home
//           </Link>
//           <span style={{ color: themes.textWhite }}>›</span>
//           <span className="font-bold" style={{ color: themes.textWhite }}>
//             {current}
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { themes } from "../config/themeConfig";

export default function InnerBanner({ title, parent, parentLink, current, bg }) {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] flex items-center justify-center text-center px-4 sm:px-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div
        ref={heroRef}
        className={`relative z-10 max-w-4xl w-full transition-all duration-700 ease-out ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
          style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
        >
          {title}
        </h1>

        {/* Divider */}
        <div className="w-full h-[1px] my-4 sm:my-6 bg-white/20" />

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base">

          {/* Home */}
          <Link
            to="/"
            className="font-bold hover:opacity-80 transition"
            style={{ color: themes.backgroundGray }}
          >
            Home
          </Link>

          {/* arrow */}
          {parent && (
            <>
              <span style={{ color: themes.textWhite }}>›</span>

              <Link
                to={parentLink}
                className="font-bold hover:opacity-80 transition"
                style={{ color: themes.backgroundGray }}
              >
                {parent}
              </Link>
            </>
          )}

          {/* arrow */}
          <span style={{ color: themes.textWhite }}>›</span>

          {/* current */}
          <span
            className="font-bold"
            style={{ color: themes.textWhite }}
          >
            {current}
          </span>

        </div>
      </div>
    </section>
  );
}