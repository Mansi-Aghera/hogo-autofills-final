

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { apiInfo } from "../service/api";

export default function ProductGrid({ selectedCategory, setCategories }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      let res;

      // ✅ If "All" selected → use sequence API
      if (!selectedCategory) {
        res = await apiInfo.get("/products/sequence/");
      } else {
        // ✅ Otherwise normal API
        res = await apiInfo.get("/products/");
      }

      const data = res.data.data || [];
      setProducts(data);

      // ✅ Extract categories ONLY from normal API
      if (!selectedCategory) return;

      const cats = [...new Set(data.map(p => p.category_name))];
      setCategories(cats);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [selectedCategory, setCategories]);

const filteredProducts = selectedCategory
  ? products.filter(p => p.category_name === selectedCategory)
  : products;

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await apiInfo.get("/products/");
      const data = res.data.data || [];

      const cats = [...new Set(data.map(p => p.category_name))];
      setCategories(cats);

    } catch (err) {
      console.log(err);
    }
  };

  fetchCategories();
}, [setCategories]);

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