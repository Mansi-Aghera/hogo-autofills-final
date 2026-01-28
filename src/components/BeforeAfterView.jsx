
 
import { useRef, useState, useEffect } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
 
import beforeImg from "../assets/images/beforeImg.jpg";
import afterImg from "../assets/images/afterImg.jpg";
 
export default function BeforeAfterView() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
 
  const [position, setPosition] = useState(50);
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
 
  /* ================= LEFT CONTENT ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
 
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const handleResize = () => {
    if (containerRef.current) {
      updatePosition(
        containerRef.current.getBoundingClientRect().left +
          (containerRef.current.offsetWidth * position) / 100
      );
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [position]);

 
  /* ================= SLIDER POSITION ================= */
  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setPosition(percent);
  };
 
  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
 
        {/* LEFT CONTENT */}
        <div ref={contentRef}>
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <DecoratedTitle text="REAL RESULTS" />
          </div>
 
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-tight transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: themes.textWhite }}
          >
            Before & After: Complete <br /> Auto Transformations
          </h2>
 
          <p
            className={`mt-6 text-base sm:text-lg opacity-80 transition-all duration-700 delay-300 ${
              visible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: themes.textWhite }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
 
        {/* RIGHT SLIDER */}
        <div
          ref={containerRef}
          className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[450px] overflow-hidden rounded-xl select-none"
          onMouseMove={(e) => dragging && updatePosition(e.clientX)}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onTouchMove={(e) => dragging && updatePosition(e.touches[0].clientX)}
          onTouchEnd={() => setDragging(false)}
        >
          {/* AFTER IMAGE */}
          <img
            src={afterImg}
            className="absolute inset-0 w-full h-full object-cover"
            alt="after"
            draggable="false"
          />
 
          {/* BEFORE IMAGE (CLIPPED) */}
          <img
            src={beforeImg}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`
            }}
            alt="before"
            draggable="false"
          />
 
          {/* DIVIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-[2px] z-10"
            style={{
              left: `${position}%`,
              backgroundColor: "#fff",
            }}
          />
 
          {/* HANDLE */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 cursor-ew-resize"
            style={{ left: `${position}%` }}
            onMouseDown={() => setDragging(true)}
            onTouchStart={() => setDragging(true)}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-white bg-transparent"></div>
              <span className="absolute left-2 text-white text-lg font-bold select-none">‹</span>
              <span className="absolute right-2 text-white text-lg font-bold select-none">›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 