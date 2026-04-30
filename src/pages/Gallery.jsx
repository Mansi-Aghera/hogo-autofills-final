
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
 import InnerBanner from "../components/InnerBanner";
import galleryBanner from "../assets/images/serviceBanner.jpg";

// HERO BG
 
// IMAGES

// import img10 from "../assets/images/gallery1.jpeg";
 
import RollingButton from "../components/RollingButton";
 
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
 
  const [galleryImages, setGalleryImages] = useState({ all: [] });

  useEffect(() => {
    fetch("https://hogofilm.pythonanywhere.com/gallery/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          const images = data.data.map((item) => item.image);
          setGalleryImages({ all: images });
        }
      })
      .catch((err) => console.error("Failed to fetch gallery images", err));
  }, []);
 
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
              object-contain
              transition-transform duration-700
              group-hover:scale-110
              bg-white
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
 
 

// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";

// import { useState, useEffect } from "react";
// import { themes } from "../config/themeConfig";
// import InnerBanner from "../components/InnerBanner";
// import galleryBanner from "../assets/images/serviceBanner.jpg";
// import RollingButton from "../components/RollingButton";

// import { apiInfo, BASE } from "../service/api"; // adjust path if needed

// export default function Gallery() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [galleryImages, setGalleryImages] = useState({
//     all: [],
//   });

//   useEffect(() => {
//   const fetchGallery = async () => {
//     try {
//       const res = await apiInfo.get("/gallery/");

//       console.log("API RESPONSE:", res.data); // 👈 keep this temporarily

//       // ✅ Handle multiple possible response shapes
//       const rawData =
//         Array.isArray(res.data)
//           ? res.data
//           : res.data.results || res.data.data || res.data.gallery || [];

//       const images = rawData.map((item) => {
//         const img = item.image || item.img || item.file;

//         if (!img) return null;

//         return img.startsWith("http") ? img : `${BASE}${img}`;
//       }).filter(Boolean);

//       setGalleryImages({
//         all: images,
//       });

//     } catch (error) {
//       console.error("Error fetching gallery:", error);
//     }
//   };

//   fetchGallery();
// }, []);

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <InnerBanner
//         title="Gallery"
//         current="Gallery"
//         bg={galleryBanner}
//       />

//       {/* ================= FILTER + GRID ================= */}
//       <section
//         className="py-16 sm:py-20 px-4 sm:px-6"
//         style={{ backgroundColor: themes.backgroundGray }}
//       >
//         <div className="max-w-7xl mx-auto">

//           {/* GRID */}
//           <PhotoProvider>
//             <div
//               key={activeFilter}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {galleryImages[activeFilter].map((img, index) => (
//                 <PhotoView src={img} key={index}>
//                   <div
//                     className="
//                       relative overflow-hidden rounded-xl group cursor-pointer
//                       opacity-0 translate-y-8
//                       animate-[fadeUp_0.8s_ease-out_forwards]
//                     "
//                     style={{
//                       animationDelay: `${index * 120}ms`,
//                       backgroundColor: themes.backgroundBlack,
//                     }}
//                   >
//                     <img
//                       draggable="false"
//                       src={img}
//                       alt="Gallery"
//                       className="
//                         w-full h-[220px] sm:h-[260px] lg:h-[300px]
//                         object-contain
//                         transition-transform duration-700
//                         group-hover:scale-110
//                         bg-white
//                       "
//                     />

//                     <div
//                       className="
//                         absolute inset-0 flex items-center justify-center
//                         opacity-0 group-hover:opacity-100
//                         transition-opacity duration-300
//                       "
//                       style={{ backgroundColor: `${themes.backgroundBlack}99` }}
//                     >
//                       <RollingButton text="VIEW" className="text-xs sm:text-sm"/>
//                     </div>
//                   </div>
//                 </PhotoView>
//               ))}
//             </div>
//           </PhotoProvider>

//         </div>
//       </section>

//       {/* LOCAL KEYFRAMES */}
//       <style>
//         {`
//           @keyframes fadeUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }