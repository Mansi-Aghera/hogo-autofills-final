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
import { useEffect, useState } from "react";
import { apiInfo } from "../service/api"; // 👈 your axios instance
import { useNavigate, Link } from "react-router-dom";

export default function FooterView() {
const [products, setProducts] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await apiInfo.get("/products/");

      console.log("FULL RESPONSE:", res.data);

      const data = res.data.data || [];

      setProducts(data.slice(0, 6));
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  fetchProducts();
}, []);

  return (
    <footer
      className="pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundColor: themes.backgroundBlack,
        color: themes.textWhite,
      }}
    >
      {/* GRID: About (wide) + Company + Service + Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14">
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
           HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over
            46 years in the automotive industry. Since its inception in 1979,
            the group has been driven by a clear vision to deliver uncompromised
            quality and lasting value to customers.
          </p><br />
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
              ),
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
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-all opacity-80"
                onClick={() => navigate(item.path)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = themes.hover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = themes.textWhite)
                }
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
  {products.length === 0 ? (
    <li className="opacity-50">Loading...</li>
  ) : (
    products.map((item) => (
      <li
        key={item.id}
        className="cursor-pointer transition-all opacity-80"
        onClick={() => navigate(`/product/${item.id}`)}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = themes.hover)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = themes.textWhite)
        }
      >
        {item.product_name}
      </li>
    ))
  )}
</ul>
        </div>

        {/* CONTACT */}
        {/* <div className="lg:pl-1">
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
        </div> */}
      </div>

      {/* BOTTOM BAR */}
      <div
        className="mt-20"
        style={{ borderTop: `1px solid ${themes.backgroundGray}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2026 - Hogo Autofilms</p>

          <div className="flex gap-8">
            <Link
              to="/terms"
              className="cursor-pointer transition-all hover:text-[var(--primary)]"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy"
              className="cursor-pointer transition-all hover:text-[var(--primary)]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


//  { name: "Blog", path: "/blog" },