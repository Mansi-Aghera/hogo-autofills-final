import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/contactBanner.jpg";
import RollingButton from "../components/RollingButton";
import contactImg from "../assets/images/contactImg.jpg";
import DecoratedTitle from "../components/DecoratedTitle";
import { apiInfo } from "../service/api";
import InnerBanner from "../components/InnerBanner";
import contactBanner from "../assets/images/contactBanner.jpg";
import Swal from "sweetalert2";

export default function ContactPage() {
  /* ================= HERO ANIMATION ================= */
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  /* ================= FORM STATE ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const isEmpty = (v) => !v || v.trim() === "";

  const onChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  /* ================= HERO OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeroVisible(true);
      },
      { threshold: 0.3 },
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setErrors({});

    let newErrors = {};

    // ✅ FRONTEND VALIDATION
    if (isEmpty(form.name)) newErrors.name = "Name is required";
    if (isEmpty(form.email)) newErrors.email = "Email is required";
    if (isEmpty(form.mobile)) newErrors.mobile = "mobile is required";
    if (isEmpty(form.message)) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await apiInfo.post("/contacts/", {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        message: form.message,
      });

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will contact you soon.",
        confirmButtonColor: "#d4af37",
      });

      setForm({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      setSubmitted(false);
      setErrors({});
    } catch (err) {
      // ✅ BACKEND VALIDATION ERRORS
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);

        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: "Please fix the highlighted fields.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <InnerBanner title="Contact" current="Contact" bg={contactBanner} />

      {/* ================= CONTACT SECTION ================= */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT IMAGE */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[420px]"
            style={{
              backgroundImage: `url(${contactImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: themes.backgroundBlack,
                opacity: 0.6,
              }}
            />

            <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-center">
              <DecoratedTitle text="GET IN TOUCH" />

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 py-6"
                style={{
                  color: themes.textWhite,
                  fontFamily: themes.fontPrimary,
                }}
              >
                We are always ready to help you
              </h2>

              <p
                className="text-base sm:text-lg opacity-90 max-w-md"
                style={{ color: themes.textWhite }}
              >
                Whether you have a question, a suggestion, or just want to say
                hello, this is the place to do it. Fill the form and we’ll get
                back to you.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="rounded-2xl p-8 sm:p-12"
            style={{ backgroundColor: themes.backgroundBlack }}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold mb-8"
              style={{ color: themes.textWhite }}
            >
              Get In Touch
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  className={`w-full px-5 py-3 rounded-lg bg-transparent border outline-none pr-10 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  style={{
                    borderColor: errors.name ? "#ef4444" : themes.textWhite,
                    color: themes.textWhite,
                  }}
                />

                {/* 🔴 Error icon */}
                {errors.name && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-sm">
                    ⚠️
                  </span>
                )}
              </div>

<div className="relative">
  <input
    type="email"
    placeholder="Your Email"
    value={form.email}
    onChange={(e) => onChange("email", e.target.value)}
    className="w-full px-5 py-3 pr-20 rounded-lg bg-transparent border outline-none transition-all"
    style={{
      borderColor: errors.email ? "#ef4444" : themes.textWhite,
      color: themes.textWhite,
    }}
  />

  {/* 🔴 Error icon */}
  {errors.email && (
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-sm">
      ⚠️
    </span>
  )}

  {/* ✨ Error text (inline, not breaking UI) */}
  {errors.email && (
    <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[11px] text-red-400 whitespace-nowrap">
      {errors.email}
    </span>
  )}
</div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Your mobile"
                  value={form.mobile}
                  onChange={(e) => onChange("mobile", e.target.value)}
                  className="w-full px-5 py-3 pr-10 rounded-lg bg-transparent border outline-none transition-all"
                  style={{
                    borderColor: errors.mobile ? "#ef4444" : themes.textWhite,
                    color: themes.textWhite,
                  }}
                />

                {/* 🔴 Error icon */}
                {errors.mobile && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-sm">
                    ⚠️
                  </span>
                )}
              </div>
              <div className="relative">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  className="w-full px-5 py-3 pr-10 rounded-lg bg-transparent border outline-none resize-none transition-all"
                  style={{
                    borderColor: errors.message ? "#ef4444" : themes.textWhite,
                    color: themes.textWhite,
                  }}
                />

                {/* 🔴 Error icon */}
                {errors.message && (
                  <span className="absolute right-3 top-4 text-red-500 text-sm">
                    ⚠️
                  </span>
                )}
              </div>
              <RollingButton
                text={loading ? "Sending..." : "Send Message"}
                type="submit"
              />
            </form>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section
        className="py-10 px-6"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left">
          {[
            {
              title: "AutoDetail HQ",
              address: "📍 125 Sunset Blvd, Los Angeles, CA",
              mobile: "📞 (213) 555-0181",
            },
            {
              title: "AutoDetail East",
              address: "📍 802 Riverfront Drive, Riverside, CA",
              mobile: "📞 (951) 555-0264",
            },
            {
              title: "AutoDetail North",
              address: "📍 3300 Silverstone Ave, San Jose, CA",
              mobile: "📞 (408) 555-0390",
            },
          ].map((loc, i) => (
            <div
              key={i}
              className="space-y-4 rounded-xl shadow-md p-6"
              style={{ backgroundColor: themes.backgroundBlack }}
            >
              <h3
                className="text-xl font-bold"
                style={{ color: themes.textWhite }}
              >
                {loc.title}
              </h3>

              <p className="text-sm" style={{ color: themes.textWhite }}>
                {loc.address}
              </p>

              <p className="text-sm" style={{ color: themes.textWhite }}>
                {loc.mobile}
              </p>

              <p className="text-sm" style={{ color: themes.textWhite }}>
                ⏰ Monday - Friday 08.00 - 18.00
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
