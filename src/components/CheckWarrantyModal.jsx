import { useState } from "react";
import { themes } from "../config/themeConfig";
import RollingButton from "./RollingButton";
import { apiInfo } from "../service/api";

export default function CheckWarrantyModal({ open, onClose }) {
  const [serial, setSerial] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  if (!open) return null;

  const handleCheck = async () => {
    if (!serial) {
      alert("Enter Serial Number");
      return;
    }

    setLoading(true);

    try {
      const invRes = await apiInfo.get("/inventory_serials/");
      const invList = invRes.data?.data || [];

      const serialObj = invList.find(
        (s) => s.serial_number === serial
      );

      if (!serialObj) {
        alert("Invalid Serial Number");
        setLoading(false);
        return;
      }

      const warRes = await apiInfo.get("/warranty/");
      const warList = warRes.data?.data || [];

      const warranty = warList.find(
        (w) => w.serial_number === serial
      );

      if (!warranty) {
        alert("Warranty Not Found");
        setLoading(false);
        return;
      }

      setData(warranty);
    } catch (e) {
      alert("Error checking warranty");
    } finally {
      setLoading(false);
    }
  };

  const Label = ({ t }) => (
    <div className="text-xs opacity-60">{t}</div>
  );

  const Val = ({ t }) => (
    <div className="font-medium">{t || "-"}</div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div
        className="relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Check Warranty
        </h2>

        {/* INPUT */}
        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 p-3 rounded border"
            placeholder="Enter Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />
          <RollingButton
            text={loading ? "..." : "Check"}
            onClick={handleCheck}
            style={{ background: themes.primary }}
          />
        </div>

        {/* RESULT */}
        {data && (
          <div className="space-y-6 text-sm">
            {/* PRODUCT */}
            <div>
              <h3 className="font-semibold mb-2">
                Product Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label t="Product" />
                  <Val t={data.product_name} />
                </div>
                <div>
                  <Label t="Serial" />
                  <Val t={data.serial_number} />
                </div>
              </div>
            </div>

            {/* VEHICLE */}
            <div>
              <h3 className="font-semibold mb-2">
                Vehicle Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label t="Registration" />
                  <Val t={data.car_registration_number} />
                </div>
                <div>
                  <Label t="Brand" />
                  <Val t={data.car_brand} />
                </div>
                <div>
                  <Label t="Model" />
                  <Val t={data.car_model} />
                </div>
                <div>
                  <Label t="Installation Date" />
                  <Val t={data.installation_date} />
                </div>
              </div>
            </div>

            {/* INSTALLER */}
            <div>
              <h3 className="font-semibold mb-2">
                Installer Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label t="Detailer Name" />
                  <Val t={data.detailer_name} />
                </div>
                <div>
                  <Label t="Mobile" />
                  <Val t={data.detailer_mobile} />
                </div>
              </div>
            </div>

            {/* WARRANTY */}
            <div>
              <h3 className="font-semibold mb-2">
                Warranty Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label t="Period" />
                  <Val t={`${data.warranty_period} months`} />
                </div>
                <div>
                  <Label t="Status" />
                  <Val t={data.warranty_status} />
                </div>
                <div>
                  <Label t="Start Date" />
                  <Val t={data.warranty_start_date} />
                </div>
                <div>
                  <Label t="End Date" />
                  <Val t={data.warranty_end_date} />
                </div>
              </div>
            </div>

            {/* IMAGES */}
            <div>
              <h3 className="font-semibold mb-2">
                Images
              </h3>

              {data.invoice_image && (
                <div>
                  <Label t="Invoice" />
                  <img
                    src={`https://hogofilm.pythonanywhere.com${data.invoice_image}`}
                    className="h-24 rounded mt-1"
                  />
                </div>
              )}

              {data.car_images?.length > 0 && (
                <div className="mt-3">
                  <Label t="Car Images" />
                  <div className="flex gap-2 flex-wrap mt-1">
                    {data.car_images.map((img, i) => (
                      <img
                        key={i}
                        src={`https://hogofilm.pythonanywhere.com${img}`}
                        className="h-20 rounded"
                      />
                    ))}
                  </div>
                </div>
              )}

              {data.installation_images?.length > 0 && (
                <div className="mt-3">
                  <Label t="Installation Images" />
                  <div className="flex gap-2 flex-wrap mt-1">
                    {data.installation_images.map((img, i) => (
                      <img
                        key={i}
                        src={`https://hogofilm.pythonanywhere.com${img}`}
                        className="h-20 rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}