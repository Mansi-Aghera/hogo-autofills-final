import { useEffect, useState } from "react";
import { themes } from "../config/themeConfig";
import RollingButton from "./RollingButton";
import { apiInfo } from "../service/api";

const isEmpty = (v) => !v || v === "";

export default function WarrantyFormModal({ open, onClose }) {
  const [serials, setSerials] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    serial_id: "",
    product_id: "",
    warranty_period: "",
    detailer_name: "",
    detailer_mobile: "",
    car_registration_number: "",
    car_brand: "",
    car_model: "",
    installation_date: "",
    car_images: [],
    installation_images: [],
    invoice_image: null,
  });

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    if (!open) return;

    apiInfo.get("/inventory_serials/").then((r) => {
      setSerials(r.data?.data || []);
    });

    apiInfo.get("/products/").then((r) => {
      setProducts(r.data?.data || []);
    });
  }, [open]);

  /* ================= SERIAL → PRODUCT ================= */
  const handleSerial = (v) => {
    const s = serials.find((x) => String(x.id) === String(v));
    setForm((p) => ({
      ...p,
      serial_id: v,
      product_id: String(s?.product || s?.product_id || ""),
    }));
  };

  /* ================= PRODUCT → WARRANTY ================= */
  useEffect(() => {
    const p = products.find(
      (x) => String(x.id) === String(form.product_id)
    );
    if (p?.warranty) {
      setForm((f) => ({ ...f, warranty_period: p.warranty }));
    }
  }, [form.product_id, products]);

  const onChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  /* ================= SAVE ================= */
  const handleSave = async () => {
    setSubmitted(true);

    if (
      isEmpty(form.serial_id) ||
      isEmpty(form.product_id) ||
      isEmpty(form.warranty_period) ||
      isEmpty(form.detailer_name) ||
      isEmpty(form.detailer_mobile) ||
      isEmpty(form.car_registration_number) ||
      isEmpty(form.car_brand) ||
      isEmpty(form.car_model) ||
      isEmpty(form.installation_date)
    )
      return;

    setLoading(true);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (Array.isArray(v)) v.forEach((f) => fd.append(k, f));
      else if (v) fd.append(k, v);
    });

    try {
      await apiInfo.post("/warranty/", fd);
      alert("Warranty Added Successfully");
      onClose();
    } catch (e) {
      alert("Error saving warranty");
    } finally {
      setLoading(false);
    }
  };

  const err = (f) => (submitted && isEmpty(form[f]) ? "border-red-500" : "");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* modal */}
      <div
        className="relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 animate-scaleIn"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6">
          Add Warranty
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* SERIAL */}
          <select
            className={`p-3 rounded border ${err("serial_id")}`}
            value={form.serial_id}
            onChange={(e) => handleSerial(e.target.value)}
          >
            <option value="">Serial</option>
            {serials.map((s) => (
              <option key={s.id} value={s.id}>
                {s.serial_number}
              </option>
            ))}
          </select>

          {/* PRODUCT NAME */}
<input
  className="p-3 rounded border bg-gray-100"
  value={
    products.find(
      (p) => String(p.id) === String(form.product_id)
    )?.product_name || ""
  }
  placeholder="Product"
  disabled
/>

{/* WARRANTY PERIOD */}
<input
  className="p-3 rounded border bg-gray-100"
  value={form.warranty_period}
  placeholder="Warranty Period"
  disabled
/>

          <input
            className={`p-3 rounded border ${err("detailer_name")}`}
            placeholder="Detailer Name"
            onChange={(e) => onChange("detailer_name", e.target.value)}
          />

          <input
            className={`p-3 rounded border ${err("detailer_mobile")}`}
            placeholder="Mobile"
            onChange={(e) => onChange("detailer_mobile", e.target.value)}
          />

          <input
            className={`p-3 rounded border ${err("car_registration_number")}`}
            placeholder="Car Reg"
            onChange={(e) =>
              onChange("car_registration_number", e.target.value)
            }
          />

          <input
            className={`p-3 rounded border ${err("car_brand")}`}
            placeholder="Brand"
            onChange={(e) => onChange("car_brand", e.target.value)}
          />

          <input
            className={`p-3 rounded border ${err("car_model")}`}
            placeholder="Model"
            onChange={(e) => onChange("car_model", e.target.value)}
          />

          <input
            type="date"
            className={`p-3 rounded border ${err("installation_date")}`}
            onChange={(e) =>
              onChange("installation_date", e.target.value)
            }
          />

          {/* FILES */}
          
{/* CAR IMAGES */}
<div>
  <label className="text-xs opacity-70 block mb-1">
    Car Images
  </label>
  <input
    type="file"
    multiple
    className="w-full text-sm"
    onChange={(e) =>
      onChange("car_images", Array.from(e.target.files))
    }
  />
  <p className="text-xs opacity-60 mt-1">
    Upload full car photos (front, back, sides)
  </p>
</div>

{/* INSTALLATION IMAGES */}
<div>
  <label className="text-xs opacity-70 block mb-1">
    Installation Images
  </label>
  <input
    type="file"
    multiple
    className="w-full text-sm"
    onChange={(e) =>
      onChange(
        "installation_images",
        Array.from(e.target.files)
      )
    }
  />
  <p className="text-xs opacity-60 mt-1">
    Film installation process photos
  </p>
</div>

{/* INVOICE */}
<div>
  <label className="text-xs opacity-70 block mb-1">
    Invoice Image
  </label>
  <input
    type="file"
    className="w-full text-sm"
    onChange={(e) =>
      onChange("invoice_image", e.target.files[0])
    }
  />
  <p className="text-xs opacity-60 mt-1">
    Upload purchase invoice or bill
  </p>
</div>
        </div>

        <div className="mt-6">
          <RollingButton
            text={loading ? "Saving..." : "Submit Warranty"}
            className="w-full"
            style={{ background: themes.primary }}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}