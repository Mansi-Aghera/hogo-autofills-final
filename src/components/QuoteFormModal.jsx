import { useEffect } from "react";
import { themes } from "../config/themeConfig";
import RollingButton from "./RollingButton";

export default function QuoteFormModal({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative w-full max-w-lg
          rounded-2xl shadow-2xl
          p-6 sm:p-8
          animate-scaleIn
        "
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ backgroundColor: themes.primary }}
          >
            <span className="text-white font-bold">🚗</span>
          </div>
          <h2 className="text-xl font-semibold">Get Quote</h2>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Please fill the form and our team will contact you.
        </p>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            placeholder="Address"
            rows="3"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="grid grid-cols-2 gap-3">
            <select className="px-4 py-3 rounded-md border border-gray-300">
              <option>City</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
            </select>

            <select className="px-4 py-3 rounded-md border border-gray-300">
              <option>Select Service</option>
              <option>PPF</option>
              <option>Window Film</option>
              <option>Ceramic</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Upload your Resume
            </label>
            <input
              type="file"
              className="mt-1 block w-full text-sm"
            />
          </div>

          {/* BUTTON */}
          <div className="pt-3">
            <RollingButton
              text="SUBMIT"
              className="w-full justify-center"
              style={{ background: themes.primary }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}