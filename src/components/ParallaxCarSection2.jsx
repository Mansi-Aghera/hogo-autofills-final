import { themes } from "../config/themeConfig";
import bgCar from "../assets/images/background-car.webp";

export default function ParallaxCarSection() {
  return (
    <section
      className="relative w-full py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgCar})`,
        backgroundAttachment: "fixed",
        backgroundColor: themes.backgroundBlack,
      }}
    >
      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">

        {/* TITLE */}
        <h2 className="text-[26px] md:text-[42px] font-semibold mb-6">
          About HOGO AUTOFILMS India Pvt. Ltd.
        </h2>

        {/* TEXT */}
        <div className="space-y-5 text-[13px] md:text-[15px] leading-relaxed text-gray-200">

          <p>
            HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over
            46 years in the automotive industry. Since its inception in 1979,
            the group has been driven by a clear vision to deliver uncompromised
            quality and lasting value to customers.
          </p>

          <p>
            With an unwavering focus on quality and consistency, the organization
            established a strong presence across automotive accessories and auto
            components. Over the years, it expanded its portfolio to include
            premium seat covers, body covers, floor mats, steering covers, and a
            wide range of auto components, serving both the aftermarket and
            leading automobile manufacturers.
          </p>

          <p>
            This commitment to excellence has earned approvals from major OEMs
            such as Maruti Suzuki, Hyundai Motor India, Mahindra & Mahindra, and
            MG Motor reinforcing its reputation as a trusted partner for
            high-quality automotive solutions.
          </p>

          <p>
            Recognizing the rapid growth of the car detailing industry, the group
            strategically diversified into the premium automotive care segment
            with the launch of advanced solutions under the brand HOGONN.
          </p>

          <p>
            At the heart of this journey lies a guiding principle “Quality and
            Consistency in Quality.”
          </p>

          <p>
            Our products are developed using advanced technologies, premium raw
            materials, and rigorous quality control processes.
          </p>

          <p>
            With a strong legacy and a forward-looking vision, HOGO AUTOFILMS
            India Pvt. Ltd. remains committed to delivering innovative,
            reliable, and world-class automotive care solutions ensuring
            exceptional value and complete customer satisfaction.
          </p>

        </div>
      </div>

      {/* 🔥 TOP FADE */}
      <div
        className="absolute top-0 left-0 w-full h-[25%]"
        style={{
          background: `linear-gradient(
            to bottom,
            ${themes.backgroundBlack} 0%,
            rgba(15, 15, 15, 0.6) 60%,
            rgba(15, 15, 15, 0) 100%
          )`,
        }}
      />

      {/* 🔥 BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%]"
        style={{
          background: `linear-gradient(
            to top,
            ${themes.backgroundBlack} 0%,
            rgba(15, 15, 15, 0.6) 60%,
            rgba(15, 15, 15, 0) 100%
          )`,
        }}
      />
    </section>
  );
}