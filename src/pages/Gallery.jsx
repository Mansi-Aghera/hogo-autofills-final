
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
 
import { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
 
// HERO BG
import bg from "../assets/images/gallery-page-bg.webp";
 
// IMAGES
import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";
import img7 from "../assets/images/gallery7.jpg";
import img8 from "../assets/images/gallery8.jpg";
import img9 from "../assets/images/gallery4.jpg";
 
import RollingButton from "../components/RollingButton";
 
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
 
  const galleryImages = {
    all: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    interior: [img1, img2, img3],
    exterior: [img4, img5, img6],
    facility: [img7, img8, img9],
  };
 
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]
                   flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
 
        <div className="relative z-10 max-w-4xl w-full
                        transition-all duration-700 ease-out
                        animate-[fadeUp_0.8s_ease-out]">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
          >
            Gallery
          </h1>
 
          <div className="w-full h-[1px] my-6 bg-white/20" />
 
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
              Home
            </Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <span className="font-bold" style={{ color: themes.textWhite }}>
              Gallery
            </span>
          </div>
        </div>
      </section>
 
      {/* ================= FILTER + GRID ================= */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto">
 
          {/* FILTER */}
<div className="flex justify-center gap-3 mb-12 flex-wrap">
  {["all", "interior", "exterior", "facility"].map((key) => {
    const isActive = activeFilter === key;
 
    return (
      <RollingButton
        key={key}
        text={key.toUpperCase()}
        onClick={() => setActiveFilter(key)}
        variant="filter"
        className="text-sm"
        style={{
          backgroundColor: isActive
            ? themes.primary
            : themes.backgroundBlack,
        }}
      />
    );
  })}
</div>
 
          {/* GRID (KEY IS MAIN MAGIC) */}
          {/* GRID */}
<PhotoProvider>
  <div
    key={activeFilter}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {galleryImages[activeFilter].map((img, index) => (
      <PhotoView src={img} key={index}>
        <div
          className="
            relative overflow-hidden rounded-xl group cursor-pointer
            opacity-0 translate-y-8
            animate-[fadeUp_0.8s_ease-out_forwards]
          "
          style={{
            animationDelay: `${index * 120}ms`,
            backgroundColor: themes.backgroundBlack,
          }}
        >
          <img
            src={img}
            alt="Gallery"
            className="
              w-full h-[260px] lg:h-[300px]
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute inset-0 flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
            style={{ backgroundColor: `${themes.backgroundBlack}99` }}
          >
            <RollingButton text="VIEW" />
          </div>
        </div>
      </PhotoView>
    ))}
  </div>
</PhotoProvider>

        </div>
      </section>
 
      {/* LOCAL KEYFRAMES */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}
 
 