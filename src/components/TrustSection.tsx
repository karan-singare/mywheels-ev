import { useScrollReveal } from "../hooks/useScrollReveal";

const brands = [
  {
    name: "Swiggy",
    logo: (
      <svg viewBox="0 0 120 30" className="h-8 md:h-10 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="28" fill="#FC8019">Swiggy</text>
      </svg>
    ),
    color: "#FC8019",
  },
  {
    name: "Zomato",
    logo: (
      <svg viewBox="0 0 130 30" className="h-8 md:h-10 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="28" fill="#E23744">zomato</text>
      </svg>
    ),
    color: "#E23744",
  },
  {
    name: "Blinkit",
    logo: (
      <svg viewBox="0 0 120 30" className="h-8 md:h-10 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="28" fill="#F7C600">blinkit</text>
      </svg>
    ),
    color: "#F7C600",
  },
  {
    name: "Zepto",
    logo: (
      <svg viewBox="0 0 110 30" className="h-8 md:h-10 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="28" fill="#7B2D8E">zepto</text>
      </svg>
    ),
    color: "#7B2D8E",
  },
  {
    name: "Amazon",
    logo: (
      <svg viewBox="0 0 140 30" className="h-8 md:h-10 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="28" fill="#FF9900">amazon</text>
      </svg>
    ),
    color: "#FF9900",
  },
];

const TrustSection: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section id="trust" className="bg-white border-b border-gray-100">
      <div ref={ref} className="px-6 md:px-[60px] mx-auto max-w-7xl py-14 md:py-18">
        <p className="text-center text-mutedLight font-medium text-sm uppercase tracking-[0.2em] mb-10 scroll-reveal">
          Used by Delivery Partners Working With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} opacity-75`}
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
