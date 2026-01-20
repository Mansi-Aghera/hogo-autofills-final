import { useState, useEffect } from "react";
import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
import t1 from "../assets/images/testimonial1.jpg";
import t2 from "../assets/images/testimonial2.jpg";
import t3 from "../assets/images/testimonial3.jpg";
import t4 from "../assets/images/testimonial4.jpg";
import SectionHeading from "./SectionHeading";
 
 
const testimonials = [
  {
    name: "John Smith",
    date: "22 Dec 2024",
    rating: 5,
    text: "Interior deep clean was amazing! All the stains and pet hair are gone. The car smells so fresh now. Highly recommendedInterior deep clean was ",
    avatar: t1,
  },
  {
    name: "Jessica Lee",
    date: "22 Dec 2024",
    rating: 4,
    text: "Interior deep clean was amazing! All the stains and pet hair are gone. The car smells so fresh now. Highly recommended",
    avatar: t2,
  },
  {
    name: "Michael Brown",
    date: "21 Dec 2024",
    rating: 5,
    text: "Interior deep clean was amazing! All the stains and pet hair are gone. The car smells so fresh now. Highly recommended",
    avatar: t3,
  },
  {
    name: "Michael Brown",
    date: "21 Dec 2024",
    rating: 5,
    text: " pet hair are gone. The car smells so fresh now. Highly recommended",
    avatar: t4,
  },
];
 
export default function TestimonialsView() {
  const [index, setIndex] = useState(0);
 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 
useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
 
 
  const visible = 2;
  const maxIndex = testimonials.length - visible;
 
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ backgroundColor: themes.backgroundBlack }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <DecoratedTitle text="TESTIMONIALS" style={{ color: themes.backgroundBlack }}/>
       <SectionHeading
  secondLine=""
  className="text-left mx-0 mt-4"
  style={{ color: themes.textWhite }}
>
What They Say</SectionHeading>


        </div>
 
        {/* RIGHT SIDE SLIDER */}
        <div className="lg:col-span-2 overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 -mx-4"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
 
          {/* Dots */}
          <div className="flex gap-3 mt-8 justify-center">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  backgroundColor:
                    i === index ? themes.primary : themes.backgroundGray,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
function TestimonialCard({ item }) {
  return (
    <div className="min-w-full md:min-w-[50%] px-4 box-border">
      <div
        className="rounded-2xl p-8 h-full"
        style={{ backgroundColor: themes.backgroundGray }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={item.avatar}
            className="w-12 h-12 rounded-full object-cover"
            alt={item.name}
          />
          <div>
            <h4 className="font-semibold" style={{ color: themes.textWhite }}>
              {item.name}
            </h4>
            <p className="text-sm opacity-70">{item.date}</p>
          </div>
        </div>
 
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              style={{
                color: i < item.rating ? "#fbbf24" : "#444",
              }}
            >
              ★
            </span>
          ))}
        </div>
 
        {/* Text */}
        <p className="leading-relaxed opacity-80">{item.text}</p>
      </div>
    </div>
  );
}
 