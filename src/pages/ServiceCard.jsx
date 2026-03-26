import { motion } from "framer-motion";

export default function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      className="relative group rounded-xl overflow-hidden cursor-pointer"
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="
          w-full
          h-[260px] sm:h-[320px] lg:h-[380px]
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h3 className="text-xl font-semibold text-center text-white">
          {item.title}
        </h3>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-black/60 z-20">
        <p className="mb-6 text-sm leading-relaxed text-white">
          {item.desc}
        </p>
      </div>

      <span className="absolute top-4 left-4 text-white/80 text-lg font-semibold z-20">
        {item.id}
      </span>
    </motion.div>
  );
}