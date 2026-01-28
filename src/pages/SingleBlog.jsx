 
import { useParams, Link } from "react-router-dom";
import { blogs } from "./Blog";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/blogBanner.jpg";
import RollingButton from "../components/RollingButton";
 
export default function SingleBlog() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const recent = [...blogs].reverse().slice(0, 4);
 
  if (!blog) return <div>Blog not found</div>;
 
  const points = [
    "Deep Interior Protection",
    "Dust & Allergen Reduction",
    "Fabric & Leather Preservation",
    "Long-Lasting Fresh Finish",
    "Surface Conditioning & Shine",
    "Faster Future Cleaning",
    "Improved Resale Appeal",
  ];
 
  const tags = [
    "Interior Cleaning","Car Care","Detailing Tips","Auto Products",
    "DIY Care","Seat Cleaning","Dashboard Care","Vehicle Protection",
    "Odor Removal","Surface Treatment","Car Maintenance"
  ];
 
  return (
    <section style={{ backgroundColor: themes.backgroundBlack }}>
 
      {/* HERO */}
      <section
        className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] flex items-center justify-center text-center px-4 sm:px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
 
        <div className="relative z-10 max-w-4xl w-full">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: themes.textWhite }}
          >
            {blog.title}
          </h1>
 
          <div className="w-full h-[1px] my-4 sm:my-6 bg-white/20" />
 
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
            <Link to="/" className="font-bold" style={{ color: themes.backgroundGray }}>Home</Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <Link to="/blog" className="font-bold" style={{ color: themes.backgroundGray }}>Blog</Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <span className="font-bold text-center" style={{ color: themes.textWhite }}>
              {blog.title}
            </span>
          </div>
        </div>
      </section>
 
      {/* MAIN */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
 
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2" style={{ color: themes.textWhite }}>
          <img src={blog.img} className="rounded-xl mb-6 sm:mb-8 w-full" alt="" />
 
          <p className="opacity-80 leading-6 sm:leading-7 text-sm sm:text-base mb-8 sm:mb-10">
            Professional interior detailing restores comfort, improves hygiene,
            and protects surfaces from daily wear. Advanced cleaning methods
            remove embedded contaminants while preserving material integrity.
          </p>
 
          <div className="space-y-6 sm:space-y-7 mb-10 sm:mb-12">
            {points.map((p, i) => (
              <div key={i} className="flex gap-4 sm:gap-5">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: themes.primary, color: themes.textWhite }}
                >
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{p}</h4>
                  <p className="opacity-70 text-xs sm:text-sm">
                    Enhances durability, visual appeal, and long-term surface protection.
                  </p>
                </div>
              </div>
            ))}
          </div>
 
          {/* FORM */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Leave a Reply</h2>
            <form className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="Name*" className="w-full p-3 rounded text-sm sm:text-base"
                style={{ background: "transparent", border: `1px solid ${themes.primary}`, color: themes.textWhite }} />
              <input type="email" placeholder="Email*" className="w-full p-3 rounded text-sm sm:text-base"
                style={{ background: "transparent", border: `1px solid ${themes.primary}`, color: themes.textWhite }} />
              <textarea placeholder="Comment" rows="5" className="w-full p-3 rounded text-sm sm:text-base"
                style={{ background: "transparent", border: `1px solid ${themes.primary}`, color: themes.textWhite }} />
              <RollingButton text="Post Comment" />
            </form>
          </div>
        </div>
 
        {/* SIDEBAR */}
        <div style={{ color: themes.textWhite }}>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Recent Posts</h3>
          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            {recent.map((item) => (
              <Link to={`/blog/${item.id}`} key={item.id} className="flex gap-3 sm:gap-4 items-center">
                <img src={item.img} className="w-16 sm:w-20 h-12 sm:h-16 object-cover rounded" alt="" />
                <p
                  className="text-xs sm:text-sm font-semibold transition-all duration-300"
                  style={{ color: themes.textWhite }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = themes.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = themes.textWhite)}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
 
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-[10px] sm:text-xs rounded transition cursor-pointer font-bold"
                style={{
                  backgroundColor: themes.backgroundGray,
                  color: themes.textWhite,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = themes.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = themes.textWhite)}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
 