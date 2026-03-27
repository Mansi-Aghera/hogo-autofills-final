

import { useEffect, useState } from "react";
import { themes } from "../config/themeConfig";
import RollingButton from "./RollingButton";
import { apiInfo } from "../service/api";

export default function QuoteFormModal({ open, onClose }) {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    contact: "",
    address: "",
    brand_id: "",
    model_id: "",
    service: "",
  });

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Fetch brands
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await apiInfo.get("/carbrands/");
        setBrands(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBrands();
  }, []);

  // Fetch models
  useEffect(() => {
    if (!form.brand_id) return;

    const fetchModels = async () => {
      try {
        const res = await apiInfo.get("/carmodels/");
        const filtered = res.data.filter(
          (m) => m.brand_id === Number(form.brand_id)
        );
        setModels(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    fetchModels();
  }, [form.brand_id]);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiInfo.post("/quotes/", form);
      alert("Quote submitted ✅");
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative w-full max-w-lg
          h-[90vh]
          bg-[#f3f3f3]
          rounded-2xl shadow-2xl
          p-5 sm:p-6
          overflow-y-auto
          hide-scrollbar
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ backgroundColor: themes.primary }}
          >
            <span className="text-white font-bold">🚗</span>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold">Get Quote</h2>
        </div>

        <p className="text-sm text-gray-600 mb-5">
          Please fill the form and our team will contact you.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={form.full_name}
            onChange={(e) => handleChange("full_name", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            value={form.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          />

          <textarea
            placeholder="Address"
            rows="3"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          />

          {/* Brand */}
          <select
            value={form.brand_id}
            onChange={(e) => handleChange("brand_id", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          >
            <option value="">Select Brand</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          {/* Model */}
          <select
            value={form.model_id}
            onChange={(e) => handleChange("model_id", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          >
            <option value="">Select Model</option>
            {models.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>

          {/* Service */}
          <select
            value={form.service}
            onChange={(e) => handleChange("service", e.target.value)}
            className="w-full px-4 py-3 rounded-md border"
          >
            <option value="">Select Service</option>
            <option>SUNROOF PROTECTION FILM</option>
            <option>PAINT PROTECTION FILM</option>
            <option>WINDOW FILM</option>
            <option>WINDSCREEN PROTECTION FILM</option>
          </select>

          {/* BUTTON */}
          <RollingButton
            text="SUBMIT"
            className="w-full justify-center mt-2"
            style={{ background: themes.primary }}
          />
        </form>
      </div>
    </div>
  );
}