
// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import { apiInfo } from "../service/api";

// export default function ProductGrid({ selectedCategory, setCategories }) {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     apiInfo.get("/products/")
//       .then((res) => {

//         const data = res.data.data || []; // API response fix

//         setProducts(data);

//         const cats = [...new Set(data.map(p => p.category_name))];
//         setCategories(cats);

//       })
//       .catch((err) => console.log(err));

//   }, [setCategories]);

//   const filteredProducts = selectedCategory
//     ? products.filter(p => p.category_name === selectedCategory)
//     : products;

//   return (
//     <div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { apiInfo } from "../service/api";

export default function ProductGrid({ selectedCategory, setCategories }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {

        const res = await apiInfo.get("/products/");
        const data = res.data.data || [];

        setProducts(data);

        const cats = [...new Set(data.map(p => p.category_name))];
        setCategories(cats);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, [setCategories]);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category_name === selectedCategory)
    : products;

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-[260px] rounded-xl bg-gray-700 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
        gap-6
        sm:gap-8
      "
      >

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}