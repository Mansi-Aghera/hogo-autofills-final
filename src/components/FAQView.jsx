

import { useState, useRef, useEffect } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
import SectionHeading from "./SectionHeading";
 
const faqs = [
  {
    q: "1. What is Paint Protection Film (PPF) and why should I use it?",
    a: "Paint Protection Film (PPF) is a transparent, durable layer applied to your vehicle’s surface to protect it from scratches, stone chips, UV rays, and environmental damage. It helps maintain your car’s original paint, gloss, and resale value while offering long-lasting protection.",
  },
  {
    q: "2. How long do HOGO AUTOFILMS products last?",
    a: `HOGO AUTOFILMS offers different product variants with warranties ranging from 3 years to 10 years, depending on the product.

• PPF YUVA – 6 Years
• PPF VAYU – 8 Years
• PPF VAJRA – 10 Years
• Windshield PPF – 3 Years
• Window Tints – 10 Years`,
  },
  {
    q: "3. Do your PPF products have self-healing properties?",
    a: "Yes, most of our PPF products come with advanced self-healing technology. Minor scratches and swirl marks disappear when exposed to heat, keeping your vehicle’s surface smooth and flawless.",
  },
  {
    q: "4. Can these films be applied only on cars?",
    a: `No, our films are versatile and can be applied on multiple vehicles including:

• Cars
• Motorbikes
• Scooters
• Trucks
• Buses and even trains`,
  },
  {
    q: "5. What are the benefits of HOGO window tint films?",
    a: `HOGO window tints provide:

• High heat rejection for better cabin comfort
• UV protection (up to 99%)
• Reduced glare for safer driving
• Enhanced privacy with multiple VLT options
• Long-lasting color stability with up to 10 years warranty`,
  },
];
export default function FAQView() {
  const [active, setActive] = useState(null);
 
  /* ================= SCROLL ANIMATION ================= */
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
 
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className="py-24"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
 
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Decorated Title */}
          <div
            className={`
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <DecoratedTitle
              text="EVERYTHING YOU NEED TO KNOW"
              style={{ color: themes.backgroundBlack }}
            />
          </div>
 
          {/* Heading */}
          <div
            className={`
              mt-4 transition-all duration-700 ease-out delay-150
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <SectionHeading
              secondLine="Question"
              className="text-left mx-0"
              style={{ color: themes.textWhite }}
            >
              Frequently Asked
            </SectionHeading>
          </div>
        </div>
 
        {/* ================= RIGHT SIDE (FAQ LIST) ================= */}
        <div
          className={`
            space-y-6
            transition-all duration-900 ease-out delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b pb-6 cursor-pointer"
              style={{ borderColor: themes.backgroundGray }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3
                  className="text-lg font-medium"
                  style={{ color: themes.textWhite }}
                >
                  {item.q}
                </h3>
 
                <span
                  className={`transition-transform duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                  style={{ color: themes.textWhite }}
                >
                  ▼
                </span>
              </div>
 
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p
                  className="leading-relaxed opacity-80"
                  style={{ color: themes.textWhite }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}