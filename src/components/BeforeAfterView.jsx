import { useRef, useState } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
 
import beforeImg from "../assets/images/beforeImg.jpg";
import afterImg from "../assets/images/afterImg.jpg";
 
export default function BeforeAfterView() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
 
  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setPosition(percent);
  };
 
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
       
        {/* LEFT */}
        <div>
          <DecoratedTitle text="REAL RESULTS" />
 
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-tight"
            style={{ color: themes.textWhite }}
          >
            Before & After: Complete <br /> Auto Transformations
          </h2>
 
          <p
            className="mt-6 text-base sm:text-lg opacity-80"
            style={{ color: themes.textWhite }}
          >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, asperiores sed libero blanditiis assumenda facilis!
          </p>
        </div>
 
        {/* RIGHT SLIDER */}
        <div
          ref={containerRef}
          className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[450px] overflow-hidden rounded-xl cursor-ew-resize select-none"
          onMouseMove={(e) => e.buttons === 1 && updatePosition(e.clientX)}
onMouseDown={(e) => updatePosition(e.clientX)}
onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
 
        >
          {/* After */}
          <img
            src={afterImg}
            className="absolute inset-0 w-full h-full object-cover"
          />
 
          {/* Before */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={beforeImg}
              className="w-full h-full object-cover"
            />
          </div>
 
          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              left: `${position}%`,
              backgroundColor: themes.textWhite,
            }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full flex items-center justify-center text-white text-lg"
              style={{ backgroundColor: themes.primary }}
            >
              ⇆
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 