// import { themes } from "../config/themeConfig";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";
// import logo from "../assets/images/logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function FooterView() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);

//   // ✅ Fetch real products from API
//   useEffect(() => {
//     axios
//       .get("https://hogofilm.pythonanywhere.com/products/")
//       .then((res) => {
//         setProducts(res.data.data || []);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   return (
//     <footer
//       className="pt-16 sm:pt-20 md:pt-24"
//       style={{
//         backgroundColor: themes.backgroundBlack,
//         color: themes.textWhite,
//       }}
//     >
//       {/* Main Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 items-start">
//         {/* Column 1 */}
//         <div className="flex flex-col items-center text-center space-y-5 w-full">
//           <Link to="/" className="flex items-center justify-center gap-3">
//             <img src={logo} alt="Hogo Autofilms" style={{ height: "60px" }} />
//           </Link>

//           <p className="leading-[1.8] opacity-80 text-sm sm:text-base">
//             HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over
//             46 years in the automotive industry. Since its inception in 1979,
//             the group has been driven by a clear vision to deliver uncompromised
//             quality and lasting value to customers.
//           </p>
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col items-center w-full">
//           <h3 className="text-lg font-semibold mb-6 text-center">Our PPF</h3>

//           <ul className="flex flex-col items-center space-y-3">
//             {products.slice(0, 5).map((product) => (
//               <li
//                 key={product.id}
//                 className="cursor-pointer text-sm sm:text-base opacity-80 transition-all duration-200"
//                 onClick={() => navigate(`/product/${product.id}`)} // ✅ correct ID
//                 onMouseEnter={
//                   (e) => (e.currentTarget.style.color = "red") // ✅ red hover
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = themes.textWhite)
//                 }
//               >
//                 {product.product_name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3 */}
//         <div className="flex flex-col items-center w-full">
//           <h3 className="text-lg font-semibold mb-6 text-center">Our PPF</h3>

//           <ul className="flex flex-col items-center space-y-3">
//             {products.slice(5, 10).map((product) => (
//               <li
//                 key={product.id}
//                 className="cursor-pointer text-sm sm:text-base opacity-80 transition-all duration-200"
//                 onClick={() => navigate(`/product/${product.id}`)} // ✅ correct ID
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = themes.textWhite)
//                 }
//               >
//                 {product.product_name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Social Icons */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-16">
//         <div className="flex justify-center gap-4 flex-wrap">
//           {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp].map(
//             (Icon, i) => (
//               <div
//                 key={i}
//                 className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all duration-200 hover:scale-105"
//                 style={{ backgroundColor: themes.backgroundGray }}
//               >
//                 <Icon style={{ color: themes.textWhite }} size={18} />
//               </div>
//             )
//           )}
//         </div>
//       </div> */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-16">
//         <div className="flex justify-center gap-4 flex-wrap">
//           {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp].map(
//             (Icon, i) => (
//               <div
//                 key={i}
//                 className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all duration-200 hover:scale-105"
//                 style={{ backgroundColor: themes.backgroundGray }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = "#D20000";
//                   const svg = e.currentTarget.querySelector("svg");
//                   if (svg) svg.style.color = "black";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = themes.backgroundGray;
//                   const svg = e.currentTarget.querySelector("svg");
//                   if (svg) svg.style.color = themes.textWhite;
//                 }}
//               >
//                 <Icon style={{ color: themes.textWhite }} size={18} />
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//       {/* Bottom */}
//       <div
//         className="mt-12 md:mt-16"
//         style={{ borderTop: `1px solid ${themes.backgroundGray}` }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
//           <p>© 2026 - Hogo Autofilms</p>
//           <div className="flex gap-6 sm:gap-8">
//             <Link
//               to="/terms"
//               className="cursor-pointer transition-all hover:text-[var(--primary)]"
//             >
//               Terms & Conditions
//             </Link>
//             <Link
//               to="/privacy"
//               className="cursor-pointer transition-all hover:text-[var(--primary)]"
//             >
//               Privacy Policy
//             </Link>
//           </div>
//         </div>
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
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FooterView() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://hogofilm.pythonanywhere.com/products/")
      .then((res) => {
        setProducts(res.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleProductClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(`/product/${id}`);
    }, 300);
  };

  return (
    <footer
      className="pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundColor: themes.backgroundBlack,
        color: themes.textWhite,
      }}
    >
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 items-start">

        {/* Column 1 */}
        <div className="flex flex-col items-center text-center space-y-5 w-full">
          <Link
            to="/"
            className="flex flex-row items-center justify-center gap-3 flex-nowrap"
          >
            <img
              src={logo}
              alt="Hogo Autofilms"
              className="flex-shrink-0 cursor-pointer"
              style={{ height: "72px", width: "auto" }}
            />
            <span
              className="whitespace-nowrap font-semibold"
              style={{ fontSize: "18px", lineHeight: "1.2" }}
            >
              HOGO AUTOFILMS
            </span>
          </Link>

          <p className="leading-[1.8] opacity-80 text-sm sm:text-base">
            HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over
            46 years in the automotive industry. Since its inception in 1979,
            the group has been driven by a clear vision to deliver uncompromised
            quality and lasting value to customers.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-lg font-semibold mb-6 text-center">Our Products</h3>
          <ul className="flex flex-col items-center space-y-3">
            {products.slice(0, 5).map((product) => (
              <li
                key={product.id}
                className="cursor-pointer text-sm sm:text-base opacity-80 transition-all duration-200"
                onClick={() => handleProductClick(product.id)}
                onMouseEnter={(e) => (e.currentTarget.style.color = themes.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = themes.textWhite)}
              >
                {product.product_name}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-lg font-semibold mb-6 text-center">Our Products</h3>
          <ul className="flex flex-col items-center space-y-3">
            {products.slice(5, 10).map((product) => (
              <li
                key={product.id}
                className="cursor-pointer text-sm sm:text-base opacity-80 transition-all duration-200"
                onClick={() => handleProductClick(product.id)}
                onMouseEnter={(e) => (e.currentTarget.style.color = themes.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = themes.textWhite)}
              >
                {product.product_name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-16">
        <div className="flex justify-center gap-4 flex-wrap">
          {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp].map(
            (Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded cursor-pointer transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: themes.backgroundGray }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D20000";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themes.backgroundGray;
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.style.color = themes.textWhite;
                }}
              >
                <Icon style={{ color: themes.textWhite }} size={18} />
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom */}
      <div
        className="mt-12 md:mt-16"
        style={{ borderTop: `1px solid ${themes.backgroundGray}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2026 - Hogo Autofilms</p>
          <div className="flex gap-6 sm:gap-8">
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