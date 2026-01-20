




// import { themes } from "../config/themeConfig";
// import DecoratedTitle from "./DecoratedTitle";

// export default function WhyChoose() {
//   return (
//     <section
// className="relative w-full min-h-[10vh] py-12 md:py-16"
//       style={{
//         backgroundColor: themes.backgroundGray,
//         fontFamily: themes.fontPrimary,
//       }}
//     >
//       {/* ===== TOP BLACK BAND WITH CENTER CONTENT ===== */}
// <div
//   className=" max-w-7xl mx-auto 
//              px-4 sm:px-6 md:px-8 
//              flex flex-col items-center justify-center text-center gap-6"
// >
//   <DecoratedTitle text="Trusted & Affordable" />

//   <div className="mt-4">   {/* ⬅️ EXTRA SPACE ABOVE HEADING */}
//     <h2
//       className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
//                  font-semibold mb-3 leading-tight"
//       style={{ color: themes.textWhite }}
//     >
//       Why Choose Our <br />
//       Services
//     </h2>

//     <p
//       className="max-w-3xl mx-auto"
//       style={{ color: themes.textWhite, opacity: 0.8 }}
//     >
//       From deep interior cleaning to long-lasting ceramic coating, <br />
//       we restore and protect your vehicle with precision and care.
//     </p>
//   </div>
// </div>


//       {/* ===== CARDS SECTION (LESS GAP FROM CONTENT) ===== */}
//       <div
//         className="
//           relative z-10 max-w-7xl mx-auto 
//           px-4 sm:px-6 md:px-8 
// pt-12 sm:pt-10 md:pt-8 lg:pt-6
//           pb-12 md:pb-16

//           grid 
//           grid-cols-1 
//           sm:grid-cols-2 
//           lg:grid-cols-4 
//           gap-4 sm:gap-5 md:gap-6
//         "
//       >
//         {/* CARD 1 */}
//         <div
//           className="p-5 sm:p-6 rounded-lg transition-all duration-300"
//           style={{ backgroundColor: themes.backgroundBlack }}
//         >
//           <h3
//             className="text-lg sm:text-xl font-semibold mb-2"
//             style={{ color: themes.textWhite }}
//           >
//             Expert Technicians
//           </h3>
//           <p
//             className="text-sm sm:text-base"
//             style={{ color: themes.textWhite, opacity: 0.8 }}
//           >
//             Our team consists of highly trained professionals with years of
//             experience in auto detailing.
//           </p>
//         </div>

//         {/* CARD 2 */}
//         <div
//           className="p-5 sm:p-6 rounded-lg transition-all duration-300"
//           style={{ backgroundColor: themes.backgroundBlack }}
//         >
//           <h3
//             className="text-lg sm:text-xl font-semibold mb-2"
//             style={{ color: themes.textWhite }}
//           >
//             Premium Products
//           </h3>
//           <p
//             className="text-sm sm:text-base"
//             style={{ color: themes.textWhite, opacity: 0.8 }}
//           >
//             We use top-quality cleaning and protection products to ensure the
//             best results.
//           </p>
//         </div>

//         {/* CARD 3 */}
//         <div
//           className="p-5 sm:p-6 rounded-lg transition-all duration-300"
//           style={{ backgroundColor: themes.backgroundBlack }}
//         >
//           <h3
//             className="text-lg sm:text-xl font-semibold mb-2"
//             style={{ color: themes.textWhite }}
//           >
//             Affordable Pricing
//           </h3>
//           <p
//             className="text-sm sm:text-base"
//             style={{ color: themes.textWhite, opacity: 0.8 }}
//           >
//             Get premium detailing services at competitive and fair pricing.
//           </p>
//         </div>

//         {/* CARD 4 */}
//         <div
//           className="p-5 sm:p-6 rounded-lg transition-all duration-300"
//           style={{ backgroundColor: themes.backgroundBlack }}
//         >
//           <h3
//             className="text-lg sm:text-xl font-semibold mb-2"
//             style={{ color: themes.textWhite }}
//           >
//             Customer Satisfaction
//           </h3>
//           <p
//             className="text-sm sm:text-base"
//             style={{ color: themes.textWhite, opacity: 0.8 }}
//           >
//             We prioritize customer happiness and ensure complete satisfaction
//             with every service.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }








import { themes } from "../config/themeConfig";
import DecoratedTitle from "./DecoratedTitle";
import SectionHeading from "./SectionHeading";

const cards = [
    {
        title: "Expert Technicians",
        desc: "majority have suffered alteration in some form, by injected humour, or randomised ",
    },
    {
        title: "Premium Products",
        desc: "words which don't look even slightly believable. If you are going to use a pas best results.",
    },
    {
        title: "Affordable Pricing",
        desc: "suffered alteration in some form, by injected humour, or randomisedsuffered alteration in some form,.",
    },
    {
        title: "Customer Satisfaction",
        desc: "which don't look even suffered alteration in some form, by injected humour, or randomised.",
    },
];

export default function WhyChoose() {
    return (
        <section
            className="relative w-full min-h-[10vh] py-12 md:py-16"
            style={{
                backgroundColor: themes.backgroundGray,
                fontFamily: themes.fontPrimary,
            }}
        >
            {/* ===== TOP CONTENT ===== */}
            <div
                className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 md:px-8 
          flex flex-col items-center justify-center text-center gap-6
        "
            >
                <DecoratedTitle
                    text="Trusted & Affordable"
                    color={themes.backgroundBlack}
                />

                <div className="">

<SectionHeading secondLine="DETAILING"
  style={{ color: themes.backgroundBlack }}
>
  WHY CHOOSE OUR CAR
</SectionHeading>






                    <p
                        className="max-w-3xl mx-auto"
                        style={{ color: themes.backgroundBlack, opacity: 0.8 }}
                    >
                        Interior deep clean was amazing! All the stains and p, <br />
                        Interior deep clean was amazing! All the stains and pet hair are gone. 
                    </p>
                </div>
            </div>

            {/* ===== CARDS SECTION (DYNAMIC) ===== */}
            <div
                className="
          relative z-10 max-w-7xl mx-auto 
          px-4 sm:px-6 md:px-8 
          pt-12 sm:pt-10 md:pt-8 lg:pt-6
          pb-12 md:pb-16

          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-4 sm:gap-5 md:gap-6
        "
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="p-5 sm:p-6 rounded-lg transition-all duration-300"
                        style={{ backgroundColor: themes.backgroundBlack }}
                    >
                        <h3
                            className="text-lg sm:text-xl font-semibold mb-2"
                            style={{ color: themes.textWhite }}
                        >
                            {card.title}
                        </h3>
                        <p
                            className="text-sm sm:text-base"
                            style={{ color: themes.textWhite, opacity: 0.8 }}
                        >
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
