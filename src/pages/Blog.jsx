// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/blogBanner.jpg";

// import b1 from "../assets/images/blog1.jpg";
// import b2 from "../assets/images/blog2.jpg";
// import b3 from "../assets/images/blog3.jpg";
// import b4 from "../assets/images/blog4.jpg";
// import b5 from "../assets/images/blog5.jpg";
// import b6 from "../assets/images/blog6.jpg";

// /* ================= BLOG DATA ================= */
// export const blogs = [
//   {
//     id: "interior-detailing",
//     date: "28",
//     month: "Jul",
//     title:
//       " There are many variations of passages of Lorem Ipsum available, but th",
//     img: b1,
//     content: "passages of Lorem Ipsum available, but ",
//   },
//   {
//     id: "detailing-history",
//     date: "28",
//     month: "Jul",
//     title: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     img: b2,
//     content: " It has roots in a piecehistory...",
//   },
//   {
//     id: "engine-bay",
//     date: "28",
//     month: "Jul",
//     title:
//       "Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
//     img: b3,
//     content: "comes from a line in section 1.10.32 cleaning...",
//   },
//   {
//     id: "paint-protection",
//     date: "28",
//     month: "Jul",
//     title: "e sure there isn't anything embarrassing hidde",
//     img: b4,
//     content: "Full n in the middle of text....",
//   },
//   {
//     id: "detailing-mistakes",
//     date: "28",
//     month: "Jul",
//     title: "Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is",
//     img: b5,
//     content: " The generated The generated about detailing ...",
//   },
//   {
//     id: "ceramic-benefits",
//     date: "28",
//     month: "Jul",
//     title: " below for those interested. Secti de Finibus",
//     img: b6,
//     content: "Full blons 1.10.32 and 1.10.33 from ",
//   },
// ];

// export default function Blog() {
//   const heroRef = useRef(null);
//   const gridRef = useRef(null);

//   const [heroVisible, setHeroVisible] = useState(false);
//   const [gridVisible, setGridVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === heroRef.current) setHeroVisible(true);
//             if (entry.target === gridRef.current) setGridVisible(true);
//           }
//         });
//       },
//       { threshold: 0.3 },
//     );

//     if (heroRef.current) observer.observe(heroRef.current);
//     if (gridRef.current) observer.observe(gridRef.current);

//     return () => observer.disconnect();
//   }, []);

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
//         <div className="absolute inset-0 bg-black/65" />

//         <div
//           ref={heroRef}
//           className={`relative z-10 max-w-4xl w-full transition-all duration-700 ${
//             heroVisible
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{ color: themes.textWhite }}
//           >
//             Blog
//           </h1>

//           <div className="w-full h-[1px] my-6 bg-white/20" />

//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link
//               to="/"
//               className="font-bold"
//               style={{ color: themes.backgroundGray }}
//             >
//               Home
//             </Link>
//             <span style={{ color: themes.textWhite }}>›</span>
//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Blog
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* BLOG GRID */}
//       <section
//         className="py-24 px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div
//           ref={gridRef}
//           className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {blogs.map((item, i) => (
//             <Link to={`/blog/${item.id}`} key={item.id}>
//               <div
//                 className={`rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${
//                   gridVisible
//                     ? "opacity-100 translate-x-0"
//                     : "opacity-0 translate-x-16"
//                 }`}
//                 style={{
//                   backgroundColor: themes.backgroundBlack,
//                   transitionDelay: `${i * 180}ms`,
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-[260px] object-cover transition-transform duration-700 hover:scale-105"
//                 />

//                 <div className="p-6 relative">
//                   <div
//                     className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center shadow-lg"
//                     style={{ backgroundColor: themes.primary }}
//                   >
//                     <span className="text-xl font-bold text-white">
//                       {item.date}
//                     </span>
//                     <span className="text-sm text-white">{item.month}</span>
//                   </div>

//                   <h3
//                     className="text-lg font-semibold mt-8 leading-snug"
//                     style={{ color: themes.textWhite }}
//                   >
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { themes } from "../config/themeConfig";
// import bg from "../assets/images/blogBanner.jpg";
 
// export default function Blog() {
//   const heroRef = useRef(null);
//   const gridRef = useRef(null);
 
//   const [heroVisible, setHeroVisible] = useState(false);
//   const [gridVisible, setGridVisible] = useState(false);
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
 
//   const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
//   /* ================= FETCH BLOGS ================= */
//   useEffect(() => {
//     fetch(`${BASE_URL}/blogs/`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) setBlogs(data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Blog fetch error:", err);
//         setLoading(false);
//       });
//   }, [BASE_URL]);
 
//   /* ================= SCROLL ANIMATION ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target === heroRef.current) setHeroVisible(true);
//           if (entry.target === gridRef.current) setGridVisible(true);
//         }
//       });
//     }, { threshold: 0.3 });
 
//     if (heroRef.current) observer.observe(heroRef.current);
//     if (gridRef.current) observer.observe(gridRef.current);
 
//     return () => observer.disconnect();
//   }, []);
 
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
//         <div className="absolute inset-0 bg-black/65" />
 
//         <div
//           ref={heroRef}
//           className={`relative z-10 max-w-4xl w-full transition-all duration-700 ${
//             heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//             style={{ color: themes.textWhite }}
//           >
//             Blog
//           </h1>
 
//           <div className="w-full h-[1px] my-6 bg-white/20" />
 
//           <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
//             <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
//               Home
//             </Link>
//             <span style={{ color: themes.textWhite }}>›</span>
//             <span className="font-bold" style={{ color: themes.textWhite }}>
//               Blog
//             </span>
//           </div>
//         </div>
//       </section>
 
//       {/* BLOG GRID */}
//       <section className="py-24 px-6" style={{ backgroundColor: themes.backgroundGray }}>
//         <div
//           ref={gridRef}
//           className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {loading ? (
//             <p className="text-center text-white col-span-3 text-lg">Loading blogs...</p>
//           ) : (
//             blogs.map((item, i) => (
//               <Link
//                 key={item.id}
//                 to={`/blog/${item.id}`}   // 🔥 FIXED HERE
//                 className={`group rounded-2xl overflow-hidden transition-all duration-700 block ${
//                   gridVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
//                 }`}
//                 style={{
//                   backgroundColor: themes.backgroundBlack,
//                   transitionDelay: `${i * 180}ms`,
//                 }}
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={`${BASE_URL}${item.image}`}
//                   alt={item.title}
//                   className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
 
//                 {/* CONTENT */}
//                 <div className="p-6 relative">
//                   <div
//                     className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center shadow-lg"
//                     style={{ backgroundColor: themes.primary }}
//                   >
//                     <span className="text-xl font-bold text-white">
//                       {new Date(item.date).getDate()}
//                     </span>
//                     <span className="text-sm text-white">{item.month}</span>
//                   </div>
 
//                   <p
//                     className="mt-10 text-lg font-semibold leading-7 transition-colors duration-300"
//                     style={{ color: themes.textWhite }}
//                   >
//                     {item.shortcontent}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </section>
//     </>
//   );
// }
 

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/blogBanner.jpg";

export default function Blog() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    fetch(`${BASE_URL}/blogs/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBlogs(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setLoading(false);
      });
  }, [BASE_URL]);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroRef.current) setHeroVisible(true);
          if (entry.target === gridRef.current) setGridVisible(true);
        }
      });
    }, { threshold: 0.3 });

    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div
          ref={heroRef}
          className={`relative z-10 max-w-4xl w-full transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: themes.textWhite }}
          >
            Blog
          </h1>

          <div className="w-full h-[1px] my-6 bg-white/20" />

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
              Home
            </Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <span className="font-bold" style={{ color: themes.textWhite }}>
              Blog
            </span>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-24 px-6" style={{ backgroundColor: themes.backgroundGray }}>
        <div
          ref={gridRef}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loading ? (
            <p className="text-center text-white col-span-3 text-lg">Loading blogs...</p>
          ) : (
            blogs.map((item, i) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className={`
                  group rounded-2xl overflow-hidden block
                  opacity-0 translate-x-10
                  ${gridVisible ? "animate-[fadeRight_0.8s_ease-out_forwards]" : ""}
                `}
                style={{
                  backgroundColor: themes.backgroundBlack,
                  animationDelay: `${i * 180}ms`,
                }}
              >
                {/* IMAGE */}
                <img
                  src={`${BASE_URL}${item.image}`}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* CONTENT */}
                <div className="p-6 relative">
                  <div
                    className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center shadow-lg"
                    style={{ backgroundColor: themes.primary }}
                  >
                    <span className="text-xl font-bold text-white">
                      {new Date(item.date).getDate()}
                    </span>
                    <span className="text-sm text-white">{item.month}</span>
                  </div>

                  <p
                    className="mt-10 text-lg font-semibold leading-7 transition-colors duration-300"
                    style={{ color: themes.textWhite }}
                  >
                    {item.shortcontent}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes fadeRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
}
