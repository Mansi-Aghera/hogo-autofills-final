
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
 
import { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
 import InnerBanner from "../components/InnerBanner";
import galleryBanner from "../assets/images/serviceBanner.jpg";

// HERO BG
 
// IMAGES
import img1 from "../assets/images/Red Porche.png";
import img2 from "../assets/images/Black Fortuner.png";
import img3 from "../assets/images/Blue_Skoda.png";
import img4 from "../assets/images/White Tuscon.png";
import img5 from "../assets/images/Black BMW 1.png";
import img6 from "../assets/images/Red Audi.png";
// import img7 from "../assets/images/gallery7.jpg";
// import img8 from "../assets/images/gallery8.jpg";
// import img9 from "../assets/images/gallery4.jpg";
 
import RollingButton from "../components/RollingButton";
 
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
 
  const galleryImages = {
    all: [img1, img2, img3, img4, img5, img6],
    // interior: [img1, img2, img3],
    // exterior: [img4, img5, img6],
    // facility: [img7, img8, img9],
  };
 
  return (
    <>
      {/* ================= HERO ================= */}
      <InnerBanner
  title="Gallery"
  current="Gallery"
  bg={galleryBanner}
/>
 
      {/* ================= FILTER + GRID ================= */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto">
 
          {/* FILTER */}
{/* <div className="flex justify-center gap-2 sm:gap-3 mb-12 whitespace-nowrap">
  {["all", "interior", "exterior", "facility"].map((key) => {
    const isActive = activeFilter === key;

    return (
      <RollingButton
        key={key}
        text={key.toUpperCase()}
        onClick={() => setActiveFilter(key)}
        variant="filter"
        className="
          text-[10px] sm:text-sm
          px-2 py-1 sm:px-4 sm:py-2
        "
        style={{
          backgroundColor: isActive
            ? themes.primary
            : themes.backgroundBlack,
        }}
      />
    );
  })}
</div> */}
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
          draggable="false"
            src={img}
            alt="Gallery"
            className="
              w-full h-[220px] sm:h-[260px] lg:h-[300px]
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
            <RollingButton text="VIEW" className="text-xs sm:text-sm"/>
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
 
 