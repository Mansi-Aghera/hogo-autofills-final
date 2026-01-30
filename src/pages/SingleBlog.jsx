import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/blogBanner.jpg";
 
export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recent, setRecent] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);
 
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
  /* FETCH BLOGS */
  useEffect(() => {
    fetch(`${BASE_URL}/blogs/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const allBlogs = data.data;
 
          const foundBlog = allBlogs.find(
            (item) => String(item.id) === String(id)
          );
 
          // Preload image
          if (foundBlog?.image) {
            const img = new Image();
            img.src = `${BASE_URL}${foundBlog.image}`;
          }
 
          setBlog(foundBlog);
 
          const sorted = [...allBlogs].reverse();
          setRecent(sorted.slice(0, 5));
 
          const allTags = allBlogs.map((item) => item.tag).filter(Boolean);
          setTags([...new Set(allTags)]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, BASE_URL]);
 
  /* Reset animation on route change */
  useEffect(() => {
    setImgLoaded(false);
  }, [id]);
 
  if (loading) return <div className="text-white p-10">Loading...</div>;
  if (!blog) return <div className="text-white p-10">Blog not found</div>;
 
  return (
    <section style={{ backgroundColor: themes.backgroundBlack }}>
 
      {/* HERO */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div key={blog.id} className="relative z-10 max-w-4xl w-full opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {blog.title}
          </h1>
          <div className="w-full h-[1px] my-6 bg-white/20" />
          <div className="flex justify-center gap-2 text-sm">
            <Link to="/" className="font-bold text-gray-300">Home</Link>
            <span className="text-white">›</span>
            <Link to="/blog" className="font-bold text-gray-300">Blog</Link>
            <span className="text-white">›</span>
            <span className="text-white">{blog.title}</span>
          </div>
        </div>
      </section>
 
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-white">
 
        {/* IMAGE + TAGS (image wider) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-12 items-start mb-14">
 
          {/* IMAGE */}
          <div className="w-full min-h-[360px] flex items-center justify-center relative overflow-hidden">
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
            )}
            <img
              src={`${BASE_URL}${blog.image}`}
              alt=""
              loading="eager"
              fetchPriority="high"
              onLoad={() => setImgLoaded(true)}
              className={`w-full max-h-[520px] object-contain transition-all duration-700 ease-out
                ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            />
          </div>
 
          {/* TAGS */}
          <div className="opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]">
            <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition"
                  style={{ backgroundColor: themes.backgroundGray }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
 
        {/* CONTENT */}
        <div key={`content-${blog.id}`} className="opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]">
          <h2 className="text-3xl font-bold mb-6">{blog.title}</h2>
          <p className="opacity-80 leading-7 whitespace-pre-line">
            {blog.content}
          </p>
        </div>
 
        {/* RECENT BLOGS */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]">
            Recent Blogs
          </h2>
 
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {recent.map((item, i) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group rounded-2xl overflow-hidden bg-[#0b0f2a] shadow-lg hover:shadow-2xl transition duration-300 opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={`${BASE_URL}${item.image}`}
                    alt=""
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-[-18px] left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                    {new Date(item.created_at).getDate()}{" "}
                    {new Date(item.created_at).toLocaleString("default", { month: "short" })}
                  </div>
                </div>
 
                <div className="pt-6 pb-4 px-4">
                  <h3 className="text-sm font-semibold text-white group-hover:text-red-500 transition line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
 
      </div>
 
      {/* ANIMATION KEYFRAMES */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
 
 