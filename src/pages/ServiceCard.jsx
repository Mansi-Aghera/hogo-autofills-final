// import { motion } from "framer-motion";

// export default function ServiceCard({ item, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40, scale: 0.96 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{
//         duration: 0.5,
//         ease: "easeOut",
//         delay: index * 0.08,
//       }}
//       className="relative group rounded-xl overflow-hidden cursor-pointer"
//     >
//       <img
//         src={item.img}
//         alt={item.title}
//         loading="lazy"
//         className="
//           w-full
//           h-[260px] sm:h-[320px] lg:h-[380px]
//           object-cover
//           transition-transform duration-700
//           group-hover:scale-110
//         "
//       />

//       <div className="absolute inset-0 bg-black/50" />

//       <div className="absolute bottom-6 left-6 right-6 z-10">
//         <h3 className="text-xl font-semibold text-center text-white">
//           {item.title}
//         </h3>
//       </div>

//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-black/60 z-20">
//         <p className="mb-6 text-sm leading-relaxed text-white">
//           {item.desc}
//         </p>
//       </div>

//       <span className="absolute top-4 left-4 text-white/80 text-lg font-semibold z-20">
//         {item.id}
//       </span>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";

export default function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      className="
        relative group 
        h-[220px] sm:h-[260px] md:h-[300px]
        rounded-2xl overflow-hidden
        cursor-pointer
      "
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="
          w-full h-full object-cover
          transition-all duration-700
          group-hover:scale-110
          group-hover:blur-[5px]
        "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Number */}
      <span className="absolute top-5 left-5 text-xl font-bold text-white z-10">
        {item.id}
      </span>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          {item.title}
        </h3>

        {/* Optional button area (hidden by default like original) */}
        <div
          className="
            opacity-0 translate-y-4
            transition-all duration-700
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          {/* Add button here if needed */}
        </div>
      </div>
    </motion.div>
  );
}