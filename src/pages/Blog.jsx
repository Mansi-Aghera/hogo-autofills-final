import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/blogBanner.jpg"; // banner image
import RollingButton from "../components/RollingButton";

import b1 from "../assets/images/blog1.jpg";
import b2 from "../assets/images/blog2.jpg";
import b3 from "../assets/images/blog3.jpg";
import b4 from "../assets/images/blog4.jpg";
import b5 from "../assets/images/blog5.jpg";
import b6 from "../assets/images/blog6.jpg";

const blogs = [
  {
    date: "28",
    month: "Jul",
    title: "Interior Detailing Tips to Refresh Seats, Dash, and More Fast",
    img: b1,
  },
  {
    date: "28",
    month: "Jul",
    title: "Car Detailing Through the Years: How Techniques Have Evolved",
    img: b2,
  },
  {
    date: "28",
    month: "Jul",
    title: "Engine Bay Detailing: Improve Performance and Impress Buyers",
    img: b3,
  },
  {
    date: "28",
    month: "Jul",
    title: "How to Protect Car Paint Against Sun, Dirt, Rain and Dust",
    img: b4,
  },
  {
    date: "28",
    month: "Jul",
    title: "5 Detailing Mistakes That Could Damage Your Car’s Appearance",
    img: b5,
  },
  {
    date: "28",
    month: "Jul",
    title: "Ceramic Coating Benefits: What Every Car Owner Should Know",
    img: b6,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        />

        <div className="relative z-10 max-w-4xl w-full">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{
              color: themes.textWhite,
              fontFamily: themes.fontPrimary,
            }}
          >
            Blog
          </h1>

          <div className="w-full h-[1px] my-6 bg-white/20" />

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link
              to="/"
              className="font-bold transition"
              style={{ color: themes.backgroundGray }}
            >
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
      <section
      className="py-24 px-6"
      style={{ backgroundColor: themes.backgroundGray }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden"
            style= {{backgroundColor: themes.backgroundBlack}}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[260px] object-cover"
            />

            {/* Content */}
            <div className="p-6 relative">
              {/* Date badge */}
              <div
                className="absolute -top-8 left-6 w-[60px] h-[70px] rounded-lg flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: themes.primary }}
              >
                <span className="text-xl font-bold text-white">
                  {item.date}
                </span>
                <span className="text-sm text-white">{item.month}</span>
              </div>

              <h3
                className="text-lg font-semibold mt-8 leading-snug"
                style={{ color: themes.textWhite }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
