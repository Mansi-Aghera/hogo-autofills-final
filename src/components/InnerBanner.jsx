import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";

export default function InnerBanner({ title, current, bg }) {
  return (
    <section
      className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ color: themes.textWhite, fontFamily: themes.fontPrimary }}
        >
          {title}
        </h1>

        <div className="w-full h-[1px] my-6 bg-white/20" />

        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>
            Home
          </Link>
          <span style={{ color: themes.textWhite }}>›</span>
          <span className="font-bold" style={{ color: themes.textWhite }}>
            {current}
          </span>
        </div>
      </div>
    </section>
  );
}