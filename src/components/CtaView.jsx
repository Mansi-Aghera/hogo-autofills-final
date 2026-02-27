import { themes } from "../config/themeConfig";
import RollingButton from "./RollingButton";
 import QuoteFormModal from "./QuoteFormModal";
import { useState } from "react";
export default function CtaView() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <section
      className="py-16"
      style={{ backgroundColor: themes.primary }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
       
        {/* Text */}
        <h2
          className="text-2xl md:text-3xl font-semibold text-center md:text-left"
          style={{ color: themes.textWhite }}
        >
          Want your car to shine like new again?
        </h2>
 
        {/* Button */}
        <RollingButton
          text="Make Appointment"
          className="border border-white bg-transparent "
          onClick={() => setQuoteOpen(true)}
        />
      </div>
      <QuoteFormModal 
  open={quoteOpen}
  onClose={() => setQuoteOpen(false)}
/>
    </section>
    
  );
}
 