 
import { themes } from "../config/themeConfig";
 
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/images/logo.png";
import { Link ,useNavigate} from "react-router-dom";
 
 
 
export default function FooterView() {
  const navigate = useNavigate();
 
  return (
    <footer
      className="pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundColor: themes.backgroundBlack,
        color: themes.textWhite,
      }}
    >
      {/* GRID: About (wide) + Company + Service + Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-14">
        {/* ABOUT – WIDE */}
        <div className="lg:col-span-2 lg:pr-14">
         <Link to="/">
  <img
    src={logo}
    alt="Hogo Autofilms"
    className="h-25 sm:h-27 cursor-pointer"
  />
</Link>
 
 
          <p className="leading-[1.9] opacity-80 max-w-xl">
majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
          </p>
 
          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mt-8">
            {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all"
                  style={{ backgroundColor: themes.backgroundGray }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = themes.hover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      themes.backgroundGray)
                  }
                >
                  <Icon style={{ color: themes.textWhite }} />
                </div>
              )
            )}
          </div>
        </div>
 
        {/* COMPANY */}
        <div className="lg:pl-2">
          <h3 className="text-lg font-semibold mb-8">Company</h3>
     
<ul className="space-y-4 list-none">
  {[
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ].map((item, i) => (
    <li
      key={i}
      className="cursor-pointer transition-all opacity-80"
      onClick={() => navigate(item.path)}
      onMouseEnter={(e) => (e.currentTarget.style.color = themes.hover)}
      onMouseLeave={(e) => (e.currentTarget.style.color = themes.textWhite)}
    >
      {item.name}
    </li>
  ))}
</ul>
        </div>
 
        {/* SERVICE */}
        <div className="lg:pl-1">
          <h3 className="text-lg font-semibold mb-8">Our PPF</h3>
          <ul className="space-y-4 list-none">
            {[
              "Full Car Paint Protection Film Installation",
              "Partial PPF (Bonnet, Bumper, Mirrors, Door Edges)",
              "Self-Healing Scratch Protection",
              "Stone Chip & Road Debris Protection",
              "UV & Color Fade Protection",
              "High-Impact Area Protection",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all opacity-80"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = themes.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = themes.textWhite)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
 
        {/* CONTACT */}
        <div className="lg:pl-1">
          <h3 className="text-lg font-semibold mb-8">Contact Us</h3>
 
          <div className="space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <MdLocationOn
                className="text-xl mt-1"
                style={{ color: themes.primary }}
              />
              <p>
                <span className="font-medium">Head Office</span>
                <br />
                <span className="opacity-80">
                  123 Shine Street, Los Angeles, CA
                </span>
              </p>
            </div>
 
            <div className="flex gap-3 sm:gap-4">
              <MdPhone
                className="text-xl mt-1"
                style={{ color: themes.primary }}
              />
              <p>
                <span className="font-medium">Call Us</span>
                <br />
                <span className="opacity-80">+1 800 987 654</span>
              </p>
            </div>
 
            <div className="flex gap-3 sm:gap-4">
              <MdEmail
                className="text-xl mt-1"
                style={{ color: themes.primary }}
              />
              <p>
                <span className="font-medium">Email Us</span>
                <br />
                <span className="opacity-80">support@Hogo Autofilms.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* BOTTOM BAR */}
      <div
        className="mt-20"
        style={{ borderTop: `1px solid ${themes.backgroundGray}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2026 - Hogo Autofilms</p>
 
          <div className="flex gap-8">
            {["Terms & Conditions", "Privacy Policy"].map((item, i) => (
              <span
                key={i}
                className="cursor-pointer transition-all"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = themes.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = themes.textWhite)
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
 
 