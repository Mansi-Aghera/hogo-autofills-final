

 
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
 
  /* FETCH BLOGS */
  useEffect(() => {
    const cached = sessionStorage.getItem("blogs");
 
    if (cached) {
      setBlogs(JSON.parse(cached));
      setLoading(false);
      return;
    }
 
    fetch(`${BASE_URL}/blogs/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data);
          sessionStorage.setItem("blogs", JSON.stringify(data.data));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [BASE_URL]);
 
  /* SCROLL ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroVisible(true);
            if (entry.target === gridRef.current) setGridVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
 
    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      {/* HERO */}
  <section
  className="relative w-full h-[320px] flex items-center justify-center text-center px-6"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/65" />
 
  <div
    ref={heroRef}
    className={`relative z-10 max-w-4xl w-full
      transition-all duration-700 ease-out
      ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      animate-[fadeUp_0.8s_ease-out]`}
  >
    <h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold"
      style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
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
        <div className="max-w-7xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden animate-pulse">
                    <div className="h-[260px] bg-gray-700" />
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gray-600 w-1/2 rounded" />
                      <div className="h-4 bg-gray-600 w-3/4 rounded" />
                    </div>
                  </div>
                ))
              : blogs.map((item, index) => {
                  const dateObj = new Date(item.date);
                  const day = dateObj.getDate();
                  const month = dateObj.toLocaleString("default", { month: "short" });
 
                  return (
                    <Link
                      key={item.id}
                      to={`/blog/${item.id}`}
                      className={`rounded-2xl overflow-hidden transition-all duration-700 block hover:-translate-y-1 hover:shadow-2xl ${
                        gridVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                      }`}
                      style={{
                        backgroundColor: themes.backgroundBlack,
                        transitionDelay: `${index * 180}ms`,
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={`${BASE_URL}${item.image}`}
                        alt={item.title}
                        className="w-full h-[260px] object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
 
                      <div className="p-6 relative">
                        <div
                          className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center shadow-lg"
                          style={{ backgroundColor: themes.primary }}
                        >
                          <span className="text-xl font-bold text-white">{day}</span>
                          <span className="text-sm text-white">{month}</span>
                        </div>
 
                        <h3 className="text-lg font-semibold mt-8 leading-snug" style={{ color: themes.textWhite }}>
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
}
 
 