
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/serviceBanner.jpg";
import RollingButton from "../components/RollingButton";
import CtaView from "../components/CtaView";
 
import s1 from "../assets/images/service1.jpg";
import s2 from "../assets/images/service2.jpg";
import s3 from "../assets/images/service3.jpg";
import s4 from "../assets/images/service4.png";
import s5 from "../assets/images/service5.jpg";
import s6 from "../assets/images/service6.png";
import InnerBanner from "../components/InnerBanner";
import ServiceCard from "./ServiceCard";
 
const services = [
  { id: "01", title: "Self healing property", img: s1 },
  { id: "02", title: "High gloss film", img: s2 },
  { id: "03", title: "Super hydrophobic property", img: s3 },
  { id: "04", title: "Excellent stain resistance", img: s4 },
  { id: "05", title: "Good optical clarity", img: s5 },
  { id: "06", title: "Anti-yellowing property", img: s6 },
];
 
export default function ServicesPage() {
  /* ================= SCROLL ANIMATION ================= */
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
 
  
 
  return (
    <>
      {/* ================= HERO ================= */}
    <InnerBanner
  title="Our Services"
  parent=""
  parentLink=""
  current="Our Services"
  bg={bg}
/>
      {/* ================= GRID ================= */}
      <section className="py-24 px-6" style={{ backgroundColor: themes.backgroundBlack }}>
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        {services.map((item, i) => (
  <ServiceCard key={i} item={item} index={i} />
))}
        </div>
      </section>
 
      <CtaView />
    </>
  );
}
 