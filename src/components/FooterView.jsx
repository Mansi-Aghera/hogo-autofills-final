// export default function FooterView() {
//   return (
//     <footer className="bg-gray-900 text-white py-10 mt-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">
//           Hogo Autofills
//         </h3>
//         <p className="text-gray-400">
//           Premium window film solutions for your home and office.
//         </p>
//         <p className="mt-4 text-sm">© 2025 Hogo Autofills. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }


 
 
 
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
 
export default function FooterView() {
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
          <img
            src={logo}
            alt="Hogo Autofills Logo"
            className="h-16 sm:h-20 mb-4 object-contain"
          />
 
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
            {["Home", "Gallery", "About Us", "Blog", "Contact"].map((item, i) => (
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
 
        {/* SERVICE */}
        <div className="lg:pl-1">
          <h3 className="text-lg font-semibold mb-8">Our Service</h3>
          <ul className="space-y-4 list-none">
            {[
              "Exterior Hand Wash & Wax",
              "Paint Correction",
              "Interior Deep Cleaning",
              "Ceramic Coating Protection",
              "Engine Bay Detailing",
              "Headlight Restoration",
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
                <span className="opacity-80">support@Hogo Autofills.com</span>
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
          <p>© 2026 - Hogo Autofills by Reactheme</p>
 
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
 
 