

 
import { themes } from "../config/themeConfig";
import bg from "../assets/images/about-us-page-bg.webp";
import aboutImg1 from "../assets/images/car-detailing-upper-img.webp";
import aboutImg2 from "../assets/images/car-detailing-back-img.webp";
import DecoratedTitle from "../components/DecoratedTitle";
 
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
 
import team1 from "../assets/images/car-detailing-upper-img.webp";
import team2 from "../assets/images/about-us-card-2nd.webp";
import team3 from "../assets/images/about-us-card-3rd.webp";
import team4 from "../assets/images/about-us-card-4th.webp";
import { Link } from "react-router-dom";
 
export default function About() {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}
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
             About Us
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
               About Us
             </span>
           </div>
         </div>
       </section>
 
      {/* ================= ABOUT CONTENT ================= */}
      <section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 pb-32 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
 
          {/* LEFT IMAGES */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative z-20">
              <img
                src={aboutImg1}
                alt="Auto detailing expert"
                className="
                  w-[210px] sm:w-[270px] md:w-[300px] lg:w-[350px] xl:w-[380px]
                  h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[460px]
                  object-cover rounded-xl shadow-2xl
                "
                style={{ backgroundColor: themes.backgroundBlack }}
              />
            </div>
 
            <div className="hidden lg:block absolute z-10 left-[160px] xl:left-[200px] top-[80px] xl:top-[100px]">
              <img
                src={aboutImg2}
                alt="Car detailing workshop"
                className="
                  w-[320px] lg:w-[360px] xl:w-[420px]
                  h-[380px] lg:h-[420px] xl:h-[460px]
                  object-cover rounded-xl shadow-xl
                "
                style={{ backgroundColor: themes.backgroundBlack }}
              />
            </div>
          </div>
 
          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              <DecoratedTitle text="ABOUT US" color={themes.backgroundBlack} />
            </div>
 
            <h2
              className="text-[clamp(28px,4vw,56px)] font-semibold leading-tight mb-6"
              style={{
                color: themes.backgroundBlack,
                fontFamily: themes.fontPrimary,
              }}
            >
              Car Detailing for Long-Lasting Protection
            </h2>
 
            <p
              className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
              style={{ color: themes.backgroundBlack }}
            >
              At AutoDetail, we are passionate about restoring and preserving
              vehicles through expert detailing services using premium products
              and proven techniques.
            </p>
 
            <p
              className="leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: themes.backgroundGray }}
            >
              From exterior hand washing to ceramic coating, we focus on detail,
              trust, and long-term care to keep your car at its best.
            </p>
          </div>
        </div>
      </section>
 
      {/* ================= TEAM SECTION ================= */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundBlack }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {[
              { img: team1, name: "Thomas Bennett", role: "Lead Detail Specialist" },
              { img: team2, name: "Hailey Cooper", role: "Customer Care Manager" },
              { img: team3, name: "Joshua Henry", role: "Paint Correction Expert" },
              { img: team4, name: "Jackson Reed", role: "Ceramic Coating Technician" },
            ].map((member, i) => (
              <div
                key={i}
                className="
                  rounded-xl overflow-hidden
                  shadow-xl
                  transition-all duration-300
                  hover:-translate-y-2
                "
                style={{ backgroundColor: themes.backgroundGray }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] object-cover"
                  style={{ backgroundColor: themes.backgroundBlack }}
                />
 
                <div className="p-3 text-center">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: themes.backgroundBlack }}
                  >
                    {member.name}
                  </h3>
 
                  <p
                    className="text-sm mt-2"
                    style={{ color: themes.backgroundBlack }}
                  >
                    {member.role}
                  </p>
 
                  <div className="flex justify-center gap-4 mt-2">
                    {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all"
                        style={{ backgroundColor: themes.backgroundBlack }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = themes.hover)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            themes.backgroundBlack)
                        }
                      >
                        <Icon size={18} style={{ color: themes.textWhite }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= VISION & MISSION ================= */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
 
          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{
                color: themes.backgroundBlack,
                fontFamily: themes.fontPrimary,
              }}
            >
              Our Vision
            </h3>
 
            <p
              className="text-lg leading-[1.9] max-w-xl"
              style={{ color: themes.backgroundBlack }}
            >
              To lead the industry with trusted, high-quality auto detailing
              services that enhance vehicle aesthetics, protect surfaces, and
              deliver unmatched customer satisfaction.
            </p>
          </div>
 
          <div>
            <h3
              className="text-xl font-semibold mb-8"
              style={{
                color: themes.backgroundBlack,
                fontFamily: themes.fontPrimary,
              }}
            >
              Our Mission
            </h3>
 
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex gap-6 items-start mb-8">
                <div
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-full
                    font-semibold
                    leading-none
                    flex-shrink-0
                  "
                  style={{
                    backgroundColor: themes.primary,
                    color: themes.backgroundBlack,
                  }}
                >
                  {num}
                </div>
 
                <p
                  className="leading-relaxed"
                  style={{ color: themes.backgroundBlack }}
                >
                  {num === 1 && (
                    <>
                      <span style={{ color: themes.backgroundBlack }}>
                        Premium Car Care:
                      </span>{" "}
                      Professional detailing solutions.
                    </>
                  )}
                  {num === 2 && (
                    <>
                      <span style={{ color: themes.backgroundBlack }}>
                        Sustainable Practices:
                      </span>{" "}
                      Eco-friendly methods.
                    </>
                  )}
                  {num === 3 && (
                    <>
                      <span style={{ color: themes.backgroundBlack }}>
                        Customer Excellence:
                      </span>{" "}
                      Reliable service and transparent communication.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
 
        </div>
      </section>
    </>
  );
}
 
 