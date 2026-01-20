 
// import { useEffect, useRef, useState } from "react";
 
// import DecoratedTitle from "./DecoratedTitle";
// import RollingButton from "./RollingButton";
 
// import about2 from "../assets/images/about2.webp";
// import about1 from "../assets/images/about1.jpg";
 
// export default function AboutView() {
//   return (
//     <>
//       {/* About Section */}
//       <section className="bg-[var(--background-black)] text-[var(--text-white)]">
//         <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
//           {/* Images */}
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
//             <img
//               src={about2}
//               alt="Detailing"
//               className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover"
//             />
//             <img
//               src={about1}
//               alt="Detailing"
//               className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover sm:mt-14"
//             />
//           </div>
 
//           {/* Content */}
//           <div className="space-y-8">
//             <DecoratedTitle text="ABOUT US" />
 
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl text-left md:text-justify">
//               Restoring Lasting Shine, <br /> Inside and Out
//             </h2>
 
//             <p className="text-[var(--background-gray)] leading-relaxed max-w-xl text-left md:text-justify">
//               At Hogo Autofills, we’re passionate about making every vehicle look
//               its absolute best— inside and out. From restoring showroom-level
//               gloss to deep-cleaning interiors, our expert team delivers
//               flawless results with care and precision.
//             </p>
 
//             <RollingButton text="Read More" />
//           </div>
//         </div>
//       </section>
 
//       {/* Stats Band */}
//       <StatsBand />
//     </>
//   );
// }
 
// /* ===================== STATS BAND ===================== */
 
// function StatsBand() {
//   const stats = [
//     { label: "Hours of Works", value: 65250, icon: "briefcase" },
//     { label: "Happy Customers", value: 23160, icon: "thumb" },
//     { label: "Experienced Workers", value: 1500, icon: "users" },
//     { label: "Years of Experience", value: 20, icon: "medal" },
//   ];
 
//   const [start, setStart] = useState(false);
//   const ref = useRef(null);
 
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setStart(true);
//       },
//       { threshold: 0.3 },
//     );
 
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
 
//   return (
//     <section
//       ref={ref}
//       className="bg-[var(--background-black)] py-20 overflow-hidden"
//     >
//       <div
//         className={`max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 transition-all duration-1000 ${
//           start ? "translate-x-0 opacity-100" : "-translate-x-16 md:-translate-x-32 opacity-0"
//         }`}
//       >
//         {stats.map((item, i) => (
//           <StatItem key={i} item={item} start={start} />
//         ))}
//       </div>
//     </section>
//   );
// }
 
// function StatIcon({ name }) {
//   const cls = "w-10 h-10 fill-[var(--primary)]";
 
//   if (name === "briefcase")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2z" />
//       </svg>
//     );
 
//   if (name === "thumb")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M2 10h4v12H2zm20 1c0-1.1-.9-2-2-2h-6l1-4V3c0-.6-.4-1-1-1h-1l-4 7v13h9c.8 0 1.5-.5 1.8-1.2l2-5c.1-.3.2-.6.2-.8v-4z" />
//       </svg>
//     );
 
//   if (name === "users")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-2.7-5.3-4-2-4zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 1.9 2 2.9v3h7v-3c0-2.7-5.3-4-8-4z" />
//       </svg>
//     );
 
//   if (name === "medal")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M12 2l3 6 6 .9-4.5 4.4L17.8 20 12 17l-5.8 3 1.1-6.7L2.8 8.9 9 8z" />
//       </svg>
//     );
// }
 
// function StatItem({ item, start }) {
//   const [count, setCount] = useState(0);
 
//   useEffect(() => {
//     if (!start) return;
 
//     let current = 0;
//     const end = item.value;
//     const duration = 1500;
//     const step = Math.ceil(end / (duration / 20));
 
//     const timer = setInterval(() => {
//       current += step;
//       if (current >= end) {
//         current = end;
//         clearInterval(timer);
//       }
//       setCount(current);
//     }, 20);
 
//     return () => clearInterval(timer);
//   }, [start, item.value]);
 
//   return (
//     <div className="flex flex-col items-center gap-3 text-center">
//       {/* ICON */}
//       <StatIcon name={item.icon} />
 
//       {/* NUMBER */}
//       <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-white)]">
//         {count}+
//       </h3>
 
//       {/* LABEL */}
//       <p className="text-[var(--background-gray)]">
//         {item.label}
//       </p>
//     </div>
//   );
// }
 
 



























// import { useEffect, useRef, useState } from "react";

// import DecoratedTitle from "./DecoratedTitle";
// import RollingButton from "./RollingButton";

// import about2 from "../assets/images/about2.webp";
// import about1 from "../assets/images/about1.jpg";

// export default function AboutView() {
//   return (
//     <>
//       {/* About Section */}
//       <section className="bg-[var(--background-black)] text-[var(--text-white)]">
//         <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
//           {/* Images */}
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
//             <img
//               src={about2}
//               alt="Detailing"
//               className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover"
//             />
//             <img
//               src={about1}
//               alt="Detailing"
//               className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover sm:mt-14"
//             />
//           </div>

//           {/* Content */}
//           <div className="space-y-8">
//             <DecoratedTitle text="ABOUT US" />

//             <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl text-left md:text-justify text-[var(--text-white)]">
//               Restoring Lasting Shine, <br /> Inside and Out
//             </h2>

// <p className="text-[var(--background-black)] leading-relaxed max-w-xl text-left md:text-justify">
//               At Hogo Autofills, we’re passionate about making every vehicle look
//               its absolute best— inside and out. From restoring showroom-level
//               gloss to deep-cleaning interiors, our expert team delivers
//               flawless results with care and precision.
//             </p>

//             <RollingButton text="Read More" />
//           </div>
//         </div>
//       </section>

//       {/* Stats Band */}
//       <StatsBand />
//     </>
//   );
// }

// /* ===================== STATS BAND ===================== */

// function StatsBand() {
//   const stats = [
//     { label: "Hours of Works", value: 65250, icon: "briefcase" },
//     { label: "Happy Customers", value: 23160, icon: "thumb" },
//     { label: "Experienced Workers", value: 1500, icon: "users" },
//     { label: "Years of Experience", value: 20, icon: "medal" },
//   ];

//   const [start, setStart] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setStart(true);
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="bg-[var(--background-black)] py-20 overflow-hidden"
//     >
//       <div
//         className={`max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 transition-all duration-1000 ${
//           start
//             ? "translate-x-0 opacity-100"
//             : "-translate-x-16 md:-translate-x-32 opacity-0"
//         }`}
//       >
//         {stats.map((item, i) => (
//           <StatItem key={i} item={item} start={start} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function StatIcon({ name }) {
//   const cls = "w-10 h-10 fill-[var(--primary)]";

//   if (name === "briefcase")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2z" />
//       </svg>
//     );

//   if (name === "thumb")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M2 10h4v12H2zm20 1c0-1.1-.9-2-2-2h-6l1-4V3c0-.6-.4-1-1-1h-1l-4 7v13h9c.8 0 1.5-.5 1.8-1.2l2-5c.1-.3.2-.6.2-.8v-4z" />
//       </svg>
//     );

//   if (name === "users")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-2.7-5.3-4-2-4zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 1.9 2 2.9v3h7v-3c0-2.7-5.3-4-8-4z" />
//       </svg>
//     );

//   if (name === "medal")
//     return (
//       <svg className={cls} viewBox="0 0 24 24">
//         <path d="M12 2l3 6 6 .9-4.5 4.4L17.8 20 12 17l-5.8 3 1.1-6.7L2.8 8.9 9 8z" />
//       </svg>
//     );
// }

// function StatItem({ item, start }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let current = 0;
//     const end = item.value;
//     const duration = 1500;
//     const step = Math.ceil(end / (duration / 20));

//     const timer = setInterval(() => {
//       current += step;
//       if (current >= end) {
//         current = end;
//         clearInterval(timer);
//       }
//       setCount(current);
//     }, 20);

//     return () => clearInterval(timer);
//   }, [start, item.value]);

//   return (
//     <div className="flex flex-col items-center gap-3 text-center">
//       {/* ICON */}
//       <StatIcon name={item.icon} />

//       {/* NUMBER */}
//       <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-white)]">
//         {count}+
//       </h3>

//       {/* LABEL */}
//       <p className="text-[var(--bg-secondary)]">{item.label}</p>
//     </div>
//   );
// }






 
import { useEffect, useRef, useState } from "react";
import DecoratedTitle from "./DecoratedTitle";
import RollingButton from "./RollingButton";
import { themes } from "../config/themeConfig";
 
import about2 from "../assets/images/about2.webp";
import about1 from "../assets/images/about1.jpg";
 
export default function AboutView() {
  return (
    <>
      {/* About Section */}
      <section style={{color: themes.textWhite }}>
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
         
          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <img
              src={about2}
              alt="Detailing"
              className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover"
            />
            <img
              src={about1}
              alt="Detailing"
              className="w-full sm:w-[48%] h-[260px] sm:h-[460px] rounded-2xl object-cover sm:mt-14"
            />
          </div>
 
          {/* Content */}
          <div className="space-y-8">
            <DecoratedTitle text="ABOUT US" 
            color={themes.backgroundBlack}
            />
 
            <h2
  className="
    uppercase
    text-left md:text-justify
    text-[clamp(20px,3vw,42px)]
    leading-[1.12]
    max-w-[25ch]
  "
  style={{ 
    color: themes.backgroundBlack,
    fontFamily: themes.fontPrimary
  }}
>
Restoring Lasting Shine, Inside and Out
</h2>

 
            <p
              className="leading-relaxed max-w-xl text-left md:text-justify"
              style={{ color: themes.backgroundBlack }}
            >
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
 
            <RollingButton text="Read More" />
          </div>
        </div>
      </section>
 
      {/* Stats Band */}
      <StatsBand />
    </>
  );
}
 
/* ===================== STATS BAND ===================== */
 
function StatsBand() {
  const stats = [
    { label: "Hours of Works", value: 65250, icon: "briefcase" },
    { label: "Happy Customers", value: 23160, icon: "thumb" },
    { label: "Experienced Workers", value: 1500, icon: "users" },
    { label: "Years of Experience", value: 20, icon: "medal" },
  ];
 
  const [start, setStart] = useState(false);
  const ref = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );
 
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section
      ref={ref}
      // style={{ backgroundColor: themes.backgroundBlack }}
      className="py-20 overflow-hidden"
    >
      <div
        className={`max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 transition-all duration-1000 ${
          start
            ? "translate-x-0 opacity-100"
            : "-translate-x-16 md:-translate-x-32 opacity-0"
        }`}
      >
        {stats.map((item, i) => (
          <StatItem key={i} item={item} start={start} />
        ))}
      </div>
    </section>
  );
}
 
function StatIcon({ name }) {
  const cls = "w-10 h-10";
 
  if (name === "briefcase")
    return (
      <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
        <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2z" />
      </svg>
    );
 
  if (name === "thumb")
    return (
      <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
        <path d="M2 10h4v12H2zm20 1c0-1.1-.9-2-2-2h-6l1-4V3c0-.6-.4-1-1-1h-1l-4 7v13h9c.8 0 1.5-.5 1.8-1.2l2-5c.1-.3.2-.6.2-.8v-4z" />
      </svg>
    );
 
  if (name === "users")
    return (
      <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-2.7-5.3-4-2-4zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 1.9 2 2.9v3h7v-3c0-2.7-5.3-4-8-4z" />
      </svg>
    );
 
  if (name === "medal")
    return (
      <svg className={cls} fill={themes.primary} viewBox="0 0 24 24">
        <path d="M12 2l3 6 6 .9-4.5 4.4L17.8 20 12 17l-5.8 3 1.1-6.7L2.8 8.9 9 8z" />
      </svg>
    );
}
 
function StatItem({ item, start }) {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    if (!start) return;
 
    let current = 0;
    const end = item.value;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 20));
 
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);
 
    return () => clearInterval(timer);
  }, [start, item.value]);
 
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <StatIcon name={item.icon} />
 
      <h3
        className="text-2xl md:text-3xl font-bold"
        style={{ color: themes.backgroundBlack }}
      >
        {count}+
      </h3>
 
      <p style={{ color: themes.backgroundBlack }}>{item.label}</p>
    </div>
  );
}
 
 