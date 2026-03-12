// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import InnerBanner from "../components/InnerBanner";
// import { motion, AnimatePresence } from "framer-motion";
// import { themes } from "../config/themeConfig";
// import serviceBanner from "../assets/images/serviceBanner.jpg"; // Your provided banner image

// // Fallback data structure - replace with actual API call
// const fetchProducts = async () => {
//   // Replace with your actual API call
//   // const response = await fetch('https://hogofilm.pythonanywhere.com/products/');
//   // return await response.json();
  
//   // Mock data for demonstration
//   return {
//     products: [
//       {
//         id: 1,
//         name: "3D Pink Car Soap – pH Balanced Formula",
//         price: 29.92,
//         category: "Car Wash Soaps",
//         brand: "Wax 3D",
//         rating: 5,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 2,
//         name: "Black Magic All Wheel Foaming Cleaner",
//         price: 6.49,
//         category: "Tire & Wheel Cleaners",
//         brand: "Black Magic",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 3,
//         name: "Formula 1 Bug & Tar Remover – 16oz",
//         price: 6.99,
//         category: "Waxes & Sealants",
//         brand: "Formula 1",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 4,
//         name: "Formula 1 Detail Express Multi-Purpose Interior Cleaner",
//         price: 24.99,
//         category: "Interior Cleaners",
//         brand: "Formula 1",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 5,
//         name: "Kenolon Ceramic Shield V1 Box – SiD, Coating Kit",
//         price: 59.65,
//         category: "Ceramic Coating Kits",
//         brand: "Kenolon",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: true,
//         salePercentage: 12
//       },
//       {
//         id: 6,
//         name: "Meguiar's DA Microfiber Correction & Finishing Kit",
//         price: 129.00,
//         category: "Ceramic Coating Kits",
//         brand: "Meguiar's",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 7,
//         name: "Meguiar's Gold Class Car Wash Shampoo",
//         price: 11.99,
//         category: "Car Wash Soaps",
//         brand: "Meguiar's",
//         rating: 5,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 8,
//         name: "Nanoskin NANO SUDS Wash & Shine Shampoo",
//         price: 32.99,
//         category: "Car Wash Soaps",
//         brand: "Nanoskin",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: true,
//         salePrice: 28.99
//       },
//       {
//         id: 9,
//         name: "Turtle Wax Hybrid Solutions Ceramic Spray Coating",
//         price: 24.99,
//         category: "Ceramic Coating Kits",
//         brand: "Turtle",
//         rating: 4,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 10,
//         name: "SONAX Polymer Net Shield",
//         price: 34.99,
//         category: "Waxes & Sealants",
//         brand: "SONAX",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 11,
//         name: "Chemical Guys Microfiber Towel Pack",
//         price: 19.99,
//         category: "Microfiber Towels",
//         brand: "Chemical Guys",
//         rating: 5,
//         image: "/api/placeholder/300/300",
//         sale: false
//       },
//       {
//         id: 12,
//         name: "West Coast Customs Detailing Brush Set",
//         price: 15.99,
//         category: "Detailing Brushes",
//         brand: "West Coast Customs",
//         rating: null,
//         image: "/api/placeholder/300/300",
//         sale: false
//       }
//     ]
//   };
// };

// // Categories from your design
// const categories = [
//   "Car Wash Soaps",
//   "Ceramic Coating Kits",
//   "Detailing Brushes",
//   "Interior Cleaners",
//   "Microfiber Towels",
//   "Tire & Wheel Cleaners",
//   "Waxes & Sealants",
//   "Uncategorized"
// ];

// // Brands with counts (from your design)


// export default function Shop() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchProducts();
//         setProducts(data.products || []);
//         setFilteredProducts(data.products || []);
//       } catch (error) {
//         console.error("Error loading products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(
//         products.filter(product => product.category === selectedCategory)
//       );
//     }
//   }, [selectedCategory, products]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };



//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Banner Component */}
//       <InnerBanner
//         title="Shop"
//         current="Shop"
//         bg={serviceBanner}
//       />

//       {/* Main Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
//         {/* Mobile Filter Button */}
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="lg:hidden w-full mb-6 px-4 py-3 bg-white rounded-lg shadow-sm flex items-center justify-between text-gray-700 font-medium"
//         >
//           <span>Filter by Category</span>
//           <svg
//             className={`w-5 h-5 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar - Categories */}
//           <aside className={`lg:w-1/4 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-xl shadow-sm p-6 sticky top-4"
//             >
//               {/* Price Filter (from design) */}
              

//               {/* Categories */}
//               <div className="mb-8">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <button
//                       onClick={() => setSelectedCategory("All")}
//                       className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
//                         selectedCategory === "All"
//                           ? "bg-black text-white"
//                           : "text-gray-600 hover:bg-gray-100"
//                       }`}
//                     >
//                       All Products
//                     </button>
//                   </li>
//                   {categories.map((category) => (
//                     <li key={category}>
//                       <button
//                         onClick={() => setSelectedCategory(category)}
//                         className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
//                           selectedCategory === category
//                             ? "bg-black text-white"
//                             : "text-gray-600 hover:bg-gray-100"
//                         }`}
//                       >
//                         {category}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Brands */}
          
//             </motion.div>
//           </aside>

//           {/* Products Grid */}
//           <main className="lg:w-3/4">
//             {/* Results Count */}
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-6 text-sm text-gray-600"
//             >
//               Showing 1–{filteredProducts.length} of {products.length} results
//             </motion.div>

//             {/* Loading State */}
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
//               </div>
//             ) : (
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 <AnimatePresence>
//                   {filteredProducts.map((product) => (
//                     <motion.div
//                       key={product.id}
//                       variants={itemVariants}
//                       layout
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
//                     >
//                       <Link to={`/product/${product.id}`}>
//                         {/* Product Image with Sale Badge */}
//                         <div className="relative overflow-hidden">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//                           />
//                           {product.sale && (
//                             <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                               {product.salePercentage ? `-${product.salePercentage}%` : 'SALE'}
//                             </div>
//                           )}
//                         </div>

//                         {/* Product Info */}
//                         <div className="p-4">
                        

//                           {/* Title */}
//                           <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
//                             {product.name}
//                           </h3>

//                           {/* Price */}
                         
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </motion.div>
//             )}

//             {/* Empty State */}
//             {!loading && filteredProducts.length === 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center py-12"
//               >
//                 <p className="text-gray-500">No products found in this category.</p>
//                 <button
//                   onClick={() => setSelectedCategory("All")}
//                   className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   View All Products
//                 </button>
//               </motion.div>
//             )}
//           </main>
//         </div>
//       </div>

     
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import { themes } from "../config/themeConfig";
import { apiInfo } from "../service/api";
import serviceBanner from "../assets/images/serviceBanner.jpg";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiInfo.get("/products/");
        const data = Array.isArray(res.data) ? res.data : res.data?.results || [];
        setProducts(data);
        setFilteredProducts(data);
        
        const cats = ["All", ...new Set(data.map(p => p.category).filter(Boolean))];
        setCategories(cats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen bg-gray-50">
      <InnerBanner title="Shop" current="Shop" bg={serviceBanner} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-bold mb-3" style={{ color: themes.primary }}>Categories</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className="w-full text-left px-3 py-2 rounded text-sm"
                      style={{
                        backgroundColor: selectedCategory === cat ? themes.primary : "transparent",
                        color: selectedCategory === cat ? "white" : themes.backgroundGray
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            <p className="text-sm mb-4" style={{ color: themes.backgroundGray }}>
              Showing {filteredProducts.length} of {products.length} results
            </p>

            {loading ? (
              <div className="text-center py-10">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(p => (
                  <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img src={p.image || "https://via.placeholder.com/300"} alt={p.name} className="w-full h-48 object-cover" />
                    <div className="p-3">
                      <h4 className="font-medium text-sm mb-2">{p.name}</h4>
                      <p className="text-lg font-bold" style={{ color: themes.primary }}>${p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}