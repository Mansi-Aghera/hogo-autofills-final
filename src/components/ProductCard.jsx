

import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
import { BASE } from "../service/api";
import { useEffect, useRef, useState } from "react";

export default function ProductCard({ product }) {

  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();

  }, []);

  return (

    <Link
      to={`/product/${product.id}`}
      className="block w-full"
    >

      <div
        ref={cardRef}
        className={`group rounded-xl overflow-hidden shadow-lg border border-white/20
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:-translate-y-2 hover:shadow-2xl`}
        style={{ background: themes.textWhite }}
      >

        {/* Image */}
        <div className="h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden flex items-center justify-center bg-white">

          <img
            src={`${BASE}${product.thumbnail_image}`}
            alt={product.product_name}
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />

        </div>

        {/* Content */}
        <div
          className="p-4 sm:p-5 md:p-6 text-center"
          style={{ background: themes.backgroundBlack }}
        >

          <h3
            className="text-sm sm:text-base md:text-lg font-semibold text-white leading-snug line-clamp-2"
          >
            {product.product_name}
          </h3>

        </div>

      </div>

    </Link>
  );
}